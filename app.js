'use strict';

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/odds');
// Catch DB in variable
var db = mongoose.connection;
// Catch DB Error
db.on('error', console.error.bind(console, 'connection error:'));
// Wait until the DB is opened
db.once('open', function() {
	// Database connected
});
// Schema shortcut
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;



var playerSchema = new Schema({
    playerId 	: ObjectId,
    name 		: String,
    stats 		: Array,
    creation 	: Date,
	modified 	: Date
});
