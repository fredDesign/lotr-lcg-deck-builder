var Reflux = require('reflux');
var request = require('superagent');

module.exports = Reflux.createStore({
	init() {
		this.cards = [];
		this.retrieveCardData();
	},

	getAllState() {
		return this.cards;
	},

	getDefaultData() {
		return this.getAllState();
	},

	updateCards(cards) {
		this.cards = cards;
		this.trigger(this.getAllState());
	},

	retrieveCardData() {
		request
			.get('/_/hero.json')
			.end((err, res) => {
				if (err) {
					console.error(err);
				} else {
					this.updateCards(res.body);
				}
			});
	}
});
