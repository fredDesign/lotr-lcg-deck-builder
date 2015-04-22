var Reflux = require('reflux');

var heroCardStore = require('./heroCardStore');
var heroCardFilterStore = require('./heroCardFilterStore');

module.exports = Reflux.createStore({
	init() {
		this.cards = heroCardStore.getDefaultData();
		this.filters = heroCardFilterStore.getDefaultData();

		this.filteredCards = [];
		this.listenTo(heroCardStore, this.onHeroCardUpdate);
		this.listenTo(heroCardFilterStore, this.onHeroCardFilterUpdate);
	},

	getAllState() {
		return this.filters.filter(this.cards);
	},

	getDefaultData() {
		return this.getAllState();
	},

	onHeroCardUpdate(cards) {
		this.cards = cards;
		this.trigger(this.getAllState());
	},

	onHeroCardFilterUpdate(filters) {
		this.filters = filters;
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
