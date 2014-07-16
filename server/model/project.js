var assert = require('assert');

// does not need an id. name should be unique

function project(name) {
	assert(name);

	this.name = name;
	this.tasks = [];
}

module.exports = project;