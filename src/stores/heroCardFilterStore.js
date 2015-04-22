var Reflux = require('reflux');
var request = require('superagent');

var HeroCardFilters = require('../models/HeroCardFilters');

var actions = require('../actions');

module.exports = Reflux.createStore({
	listenables: actions,

	init() {
		this.searchText = '';
		this.spheres = {};
	},

	getAllState() {
		var maxResults = 12;
		return new HeroCardFilters(
			this.searchText,
			this.spheres,
			maxResults
		);
	},

	getDefaultData() {
		return this.getAllState();
	},

	onSearch(text) {
		this.searchText = text;
		this.trigger(this.getAllState());
	},

	onToggleSphere(sphere) {
		this.spheres[sphere] = !this.spheres[sphere];
		this.trigger(this.getAllState());
	}
});
