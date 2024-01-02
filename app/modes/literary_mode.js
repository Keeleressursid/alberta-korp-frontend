settings.corpora = {};
settings.corporafolders = {};

// Corpora
// Semperi ja Barbaruse kirjavahetus

// sbk =  "Semperi ja Barbaruse kirjavahetus"

sbk = "<a href=\"http://krzwlive.kirmus.ee/et/lisamaterjalid/ajatelje_materjalid?item_id=303&page_start=&table=Persons\">Johannes Vares-Barbaruse</a> (1890-1946) kirjade originaalid  <a href=\"http://krzwlive.kirmus.ee/et/lisamaterjalid/ajatelje_materjalid?item_id=146&page_start=&table=Persons\">Johannes Semperile</a> (1892-1970) on hoiul Eesti Kultuuriajaloo Arhiivis</a> Eesti Kirjandusmuuseumis ja Semperi kirjad Barbarusele Eesti Rahvusarhiivis. Kirjavahetus aastatest 19011-1939 koosneb 670 kirjast, mille kogumaht on üle 1100 lehekülje. <br />" + "Korpuse DOI: <a href=\"http://doi.org/10.15155/9-00-0000-0000-0000-00190L\">10.15155/9-00-0000-0000-0000-00190L</a>"


settings.corpora.semperbarbarus = {
    id : "semperbarbarus",
    title : "Semperi ja Barbaruse kirjavahetus",
    description : sbk,
    within: sppWithin,
    context: spContext,
    attributes : attrs.koondAttrs,
    structAttributes : {
	text_category : {label : "category"},
	// text_author : {label : "author"},
	// text_date : {label : "date"}
	text_number : {label : "catal_no"},
	text_sender : {label : "sender"},
	text_recipient : {label : "recipient"},
	text_date : {label : "date"},
	text_origdate : {label : "origdate"},
	text_place : {label : "place"},
	text_notes : {label : "notes"},
	text_year : {label : "year"}
    }
};


// Kirjanduskriitika korpus

// kkkk


// kkkk = "Eesti kirjanduskriitika 1920 aastaist"
kkkk = "<p>Valik Noor-Eesti ja 1920. aastate kriitikatekste. Kokku 120 teksti, millest 103 pärinevad kirjandusloo veebikeskkonnast \"ERNI. Eesti kirjanduslugu tekstides 1924 – 1925\", 10 teksti rühmituse \"Noor-Eesti\" ajakirjadest ja 7 teksti rühmituse \"Noor-Eesti\" albumitest. Korpus sisaldab Noor-Eesti väljaannetes ilmunud ja 1920. aastate kirjanduskriitika erinevatesse žanrisse kuuluvaid tekste (lühiarvustused, arvustuslikud esseed, aasta- ja autoriülevaated, tutvustused, kirjanduslikud poleemikad) järgmistest allikatest: <ol style=\"float: left; padding-left:18px; margin-left:10px; list-style-type: decimal;\"><li>albumid „Noor-Eesti“ (I–V köide, 1905–1915) ning väljaanne \"Noor-Eesti\".  Kirjanduse, kunsti ja teaduste ajakiri (nr 1–5/6, 1910–11);</li><li>Eesti kesksetest päevalehtedest Postimees, Päevaleht ja Vaba Maa, kuid ka väiksematest väljaannetest Agu, Kratt, Nädal, Urikivi, Vikerkaar, Tallinna Teataja, Üliõpilasleht ning ajakirjadest Eesti Kirjandus ja Looming digiteeritud tekstidest teabekeskkonna jaoks “ERNI. Eesti kirjanduslugu tekstides 1924-25“.</li></ol></p> <p>Korpuse DOI: <a href=\"http://doi.org/10.15155/9-00-0000-0000-0000-00193L\">10.15155/9-00-0000-0000-0000-00193L</a></p>"

kkpk = "Eesti kirjanduskriitika korpus, Noor-Eesti ja 1920. aastad"

settings.corpora.kriitika_long = {
    id : "kriitika_long",
    title : kkpk, 
    description : kkkk,
    within: sppWithin,
    context: spContext,
    attributes : attrs.koondAttrs,
    structAttributes : {
	//text_category : {label : "category"},
	text_author : {label : "author"},
	text_title : {label: "title" },
	// text_date : {label : "date"}
	//text_number : {label : "catal_no"},
	//text_sender : {label : "sender"},
	//text_recipient : {label : "recipient"},
	//text_date : {label : "date"},
	//text_origdate : {label : "origdate"},
	//text_place : {label : "place"},
	text_note : {label : "note"},
	//text_year : {label : "year"}
    }
};

// Underi ja Ivaski kirjavahetus

uik =  "Underi ja Ivaski kirjavahetus"

// sbk = "<a href=\"http://krzwlive.kirmus.ee/et/lisamaterjalid/ajatelje_materjalid?item_id=303&page_start=&table=Persons\">Johannes Vares-Barbaruse</a> (1890-1946) kirjade originaalid  <a href=\"http://krzwlive.kirmus.ee/et/lisamaterjalid/ajatelje_materjalid?item_id=146&page_start=&table=Persons\">Johannes Semperile</a> (1892-1970) on hoiul Eesti Kultuuriajaloo Arhiivis</a> Eesti Kirjandusmuuseumis ja Semperi kirjad Barbarusele Eesti Rahvusarhiivis. Kirjavahetus aastatest 19011-1939 koosneb 670 kirjast, mille kogumaht on üle 1100 lehekülje. <br />" + "Korpuse DOI: <a href=\"http://doi.org/10.15155/9-00-0000-0000-0000-00190L\">10.15155/9-00-0000-0000-0000-00190L</a>"


settings.corpora.underivask = {
    id : "underivask",
    title : "Underi ja Ivaski kirjavahetus",
    description : uik,
    within: sppWithin,
    context: spContext,
    attributes : attrs.koondAttrs,
    structAttributes : {
	name_type : {label : "name"}, 
	text_category : {label : "category"},
	// text_author : {label : "author"},
	// text_date : {label : "date"}
	text_number : {label : "catal_no"},
	text_sender : {label : "sender"},
	text_recipient : {label : "recipient"},
	text_date : {label : "date"},
	text_origdate : {label : "origdate"},
	text_place : {label : "place"},
	text_notes : {label : "notes"},
	text_year : {label : "year"}
    }
};



settings.corpusListing = new CorpusListing(settings.corpora);
