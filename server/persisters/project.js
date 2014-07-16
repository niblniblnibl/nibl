var client = require('../redis/client');

function get(name, cb) {
	if (client.connected) {
		client.hgetall(name, function (e, res) {
			if (e) {
				return cb(new Error('cannot persister.get() project ' + name + ': ' + e.message));
			}

			cb(void 0, res);
		});
	} else {
		cb(new Error('cannot persister.get() project ' + name));
	}
}

function create(project, cb) {
	if (client.connected) {
		client.hmset(project.name, function (e) {
			if (e) {
				return cb(new Error('cannot persister.create() project ' + project.name));
			}

			cb(void 0);
		});
	} else {
		cb(new Error('cannot persister.create() project ' + project.name));
	}
}

function update(project, cb) {
	create(project, cb);
}

function delete(project, cb) {
	if (client.connected) {
		client.mdel(project.name, function (e) {
			if (e) {
				return cb(new Error('cannot persister.delete() project ' + project.name));
			}

			cb(void 0);
		});
	} else {
		cb(new Error('cannot persister.delete() project ' + project.name));
	}
}