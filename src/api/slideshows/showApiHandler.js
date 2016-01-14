"use strict";

//This file is mocking a web API by hitting hard coded data.
var shows = require('./showData').shows;
var _ = require('lodash');

//This would be performed on the server in a real app. Just stubbing in.
var _generateId = function(show) {
	return show.id.toLowerCase() + '-' + show.lastName.toLowerCase();
};

var _clone = function(item) {
	return JSON.parse(JSON.stringify(item)); //return cloned copy so that the item is passed by value instead of by reference
};

var ShowApiHandler = {
	getAllShows: function() {
		return _clone(shows); 
	},

	getShowById: function(id) {
		var show = _.find(shows, {id: id});
		return _clone(show);
	},
	
	saveShow: function(show) {
		//pretend an ajax call to web api is made here
		console.log('Pretend this just saved the show to the DB via AJAX call...');
		
		if (show.id) {
			var existingShowIndex = _.indexOf(shows, _.find(shows, {id: show.id})); 
			shows.splice(existingShowIndex, 1, show);
		} else {
			//Just simulating creation here.
			//The server would generate ids for new shows in a real app.
			//Cloning so copy returned is passed by value rather than by reference.
			show.id = _generateId(show);
			shows.push(show);
		}

		return _clone(show);
	},

	deleteShow: function(id) {
		console.log('Pretend this just deleted the show from the DB via an AJAX call...');
		_.remove(shows, { id: id});
	}
};

module.exports = ShowApiHandler;