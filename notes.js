console.log('Starting notes.js');

var addNote = (title, body) => {
	console.log("Adding Note", title, body);
};
var getAll = () => {
	console.log("Retrieving all Notes");
};
var getNote = (title) => {
	console.log("Getting note: ", title);
};
var removeNote = (title) => {
	console.log('Removing note: ', title);
};

module.exports = {
	// addNote: addNote same as below for ES6
	addNote,
	getAll,
	getNote,
	removeNote
};