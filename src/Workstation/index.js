'use strict'
let events = {
	workstation: {}
}

let tasks = [];


module.exports = {
	module: require('./workstation.js'),
	name: 'workstation',
	permissions: [],
	exposed: true,
	tasks: tasks,
	events: {
		group: 'workstation',
		shorthands: events.workstation
	}
};