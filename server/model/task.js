var assert = require('assert');

// tasks can be shared. no need for id, task names should be unique

function task (name) {
	assert(name);

	this.name = name;
}

module.exports = task;

