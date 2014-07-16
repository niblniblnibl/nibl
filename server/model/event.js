var assert = require('assert');

function event(name, date, taskid) {
	assert(name);
	assert(date);
	assert(taskid);

	this.name = name;
	this.date = date;
	this.taskid = taskid;
}

module.exports = event;