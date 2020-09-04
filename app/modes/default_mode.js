settings.corpora = {};
settings.corporafolders = {};

// settings.corporafolders.sweac = {
//     title: "Akademiska texter",
//     contents: ["sweachum", "sweacsam"],
//     description: "A description"
// };

/*
 * PRESELECTED CORPORA
 * Folders will be expanded to all corpora. Optionally prefix folders with __ , which will be ignored.
 */
settings.preselectedCorpora = ["dickens"];


// settings.corpora["magmakolumner"] = {
//     id: "magmakolumner",
//     title: "Magma kolumner 2009–2012",
//     description: "Material ur kolumner publicerade av <a target=\"_blank\" href=\"http://www.magma.fi\">Tankesmedjan Magma</a>",
//     within: spWithin,
//     context: spContext,
//     attributes: modernAttrs,
//     structAttributes: {
//         text_author: {label: "author"},
//         text_title: {label: "title"},
//         text_date: {label: "date"}
//     }
// };

settings.corpora["dickens"] = {
    id: "dickens",
    title: "Dickens Test Corpus",
    description: "an English test corpus"
};




settings.corpusListing = new CorpusListing(settings.corpora);
