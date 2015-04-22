var React = require('react');
var Reflux = require('reflux');
var _ = require('lodash');

var CardList = require('../components/CardList');
var HeroCardFilters = require('../components/HeroCardFilters');

var filteredHeroCardStore = require('../stores/filteredHeroCardStore');
var heroCardFilterStore = require('../stores/heroCardFilterStore');

var CardListPage = React.createClass({
	mixins: [
		Reflux.connect(filteredHeroCardStore, 'cards'),
		Reflux.connect(heroCardFilterStore, 'filters')
	],

	getInitialState() {
		return {
			cards: filteredHeroCardStore.getDefaultData(),
			filters: heroCardFilterStore.getDefaultData()
		};
	},

	render() {
		return (
			<div>
				<HeroCardFilters filters={this.state.filters} />
				<CardList cards={this.state.cards} />
			</div>
		)
	}
});

module.exports = CardListPage;
