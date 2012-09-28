function(doc, req) { 
	var Mustache = require("vendor/couchapp/lib/mustache");
   	var stash = {
			artist: doc.artist,
			title : doc.title,
			description: doc.description,
			genre: doc.genre,
			document: doc._id
    };
	return Mustache.to_html(this.templates.album, stash, this.templates.partials.album);
}