var lemgramProxy;
var simpleSearch;
var kwicResults;
var lemgramResults;

$(function(){
	$.ajaxSetup({ 
		dataType: "jsonp",
		traditional: true
	});
	
	
//	$('body').keydown(function(event) {
	$('body').bind("keydown.autocomplete", function(event) {
		if (event.keyCode == $.ui.keyCode.ENTER) {
			if(!simpleSearch.isEnabled()) return;
			
			if ( $("#simple_text").is(":visible" )) {
				$("#simple_text").autocomplete("close");
			}
			$("#sendBtn").click();
//			if(!$("#ui-active-menuitem").length ) {
//				$.log("enter pressed: submit ");
//			}
				
		}
	});
	
		
	$("#searchbar").load("searchbar.html", function() {
		$.log("content load");
		lemgramProxy = new model.LemgramProxy();
		kwicProxy = new model.KWICProxy();
		simpleSearch = new view.SimpleSearch();
		kwicResults = new view.KWICResults();
		lemgramResults = new view.LemgramResults();
		
		loadCorpora();
		resetQuery();
		
		$("#tabs-container").tabs();
		$("#result-container").tabs({
			disabled : [2],
			show : function() {
				if($("#result-container").tabs("option", "selected")) { // any other than the first tab is selected
					hideSidebar();
					setJsonLink(simpleSearch.prevLemgramRequest);
				}
				else { // first tab selected
					kwicResults.centerScrollbar();
					showSidebar();
					setJsonLink(kwicProxy.prevRequest);
					
				}
			} 
		});
		
		$("#result-container").click(function(){
			util.SelectionManager.deselect();
		});
//	setup language
		$("#languages").children().click(function(){
			$("#languages").children().removeClass("lang_selected");
			$(this).addClass("lang_selected");
			util.localize();
		});
		$("[data-lang=" + $.defaultLanguage.split("-")[0] + "]").click();
		
//	move out sidebar
		hideSidebar();
		
		$("#simple_text")[0].focus();
		parseQuery();
	});
});

function parseQuery(){

	var corpus = $.getUrlVar('corpus');
	if (corpus && corpus.length != 0){
		$("#select_corpus").val(corpus);
		didSelectCorpus();
	}
	
	var word = $.getUrlVar('word');
	if(word && word.length != 0){
		$('input[type=text]').val(decodeURIComponent(word));
		updateCQP();
		submitFormToServer();
	}
	
	var saldo = $.getUrlVar('saldo');
	if (saldo && saldo.length != 0){
		$("#cqp_string").val('[(saldo contains "'+saldo+'")]');
		$('a[href="#korp-advanced"]').trigger('click');
		submitFormToServer();
	}
	
	var lemgram = $.getUrlVar('lemgram');
	if (lemgram && lemgram.length != 0){
		simpleSearch.renderSimilarHeader(lemgram);
		simpleSearch.selectLemgram(lemgram);
	}
	
	var cqp = $.getUrlVar('cqp');
	if (cqp && cqp.length != 0){
		$("#cqp_string").val(cqp);
		$('a[href="#korp-advanced"]').trigger('click');
		submitFormToServer();
	}		
}

var util = {};
// <!-- SelectionManager
util.SelectionManager = function() {
	$.error("SelectionManager is a static class, don't instantiate it.");
};

util.SelectionManager.select = function(word) {
	
	if(this.selected) {
		this.selected.removeClass("token_selected");
	}
		
	this.selected = word;
	word.addClass("token_selected");
};
util.SelectionManager.deselect = function() {
	if(!this.selected) return;
	this.selected.removeClass("token_selected");
	this.selected = null;
};
// SelectionManager -->

util.getLocaleString = function(key) {
	if(!$.localize.data) {
		$.error("Locale string cannot be found because no data file has been read.");
		return;
	}
	return $.localize.data.locale[key];
};

util.localize = function() {
	$("[rel^=localize]").localize("locale" ,{pathPrefix : "translations", language : $("#languages .lang_selected").data("lang")});
};

util.lemgramToString = function(lemgram, appendIndex) {
	var infixIndex = "";
	if(util.isLemgramId(lemgram)) {
		if(appendIndex != null && lemgram.slice(-1) != "1") {
			infixIndex = $.format("<sup>%s</sup>", lemgram.slice(-1));
		}
		var match = util.splitLemgram(lemgram);
		var concept = match[0].replace(/_/g, " ");
		var type = match[1].slice(0, 2);
	}
	else { // missing from saldo, and have the form word_NN instead.
		var concept = lemgram.split("_")[0];
		var type = lemgram.split("_")[1];
	}
	return $.format("%s%s <span class='wordclass_suffix'>(<span rel='localize[%s]'>%s</span>)</span>", 
			[concept, infixIndex, type, util.getLocaleString(type)]);
};

util.lemgramArraytoString = function(lemgramArray, labelFunction) {
	labelFunction = labelFunction || util.lemgramToString;
	var tempArray = $.map(lemgramArray, function(lemgram){
		return lemgram.slice(0,-1);
	});
	return $.map(lemgramArray, function(lemgram) {
		var isAmbigous = $.grep(tempArray, function(tempLemgram) {
			return tempLemgram == lemgram.slice(0, -1);
		}).length > 1;
		return labelFunction(lemgram, isAmbigous);
	});
};

util.lemgramRegexp = /\.\.\w+\.\d\d?$/;
util.isLemgramId = function(lemgram) {
	return lemgram.search(util.lemgramRegexp) != -1;
};
util.splitLemgram = function(lemgram) {
	if(!util.isLemgramId(lemgram)) {
		$.error("Input to util.wordFromLemgram is not a lemgram: " + lemgram);
		return;
	}
	return lemgram.match(/(.*?)\.\.(\w+)\.(\d\d?)$/).slice(1);
};

