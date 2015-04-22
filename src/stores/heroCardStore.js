var Reflux = require('reflux');
var request = require('superagent');

module.exports = Reflux.createStore({
	init() {
		this.cards = [];
		request.get('/_/hero.json')
			.end((err, res) => {
				if (err) {
					console.error(err);
				} else {
					this.updateCards(res.body);
				}
			});
	},

	getDefaultData() {
		return this.cards;
	},

	updateCards(cards) {
		this.cards = cards;
		this.trigger(this.cards);
	}
});
