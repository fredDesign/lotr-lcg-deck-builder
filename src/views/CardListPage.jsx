var React = require('react');
var Reflux = require('reflux');
var _ = require('lodash');

var CardList = require('../components/CardList');

var heroCardStore = require('../stores/heroCardStore');

var CardListPage = React.createClass({
	mixins: [ Reflux.connect(heroCardStore, 'cards') ],

	getInitialState() {
		return {
			cards: heroCardStore.getDefaultData()
		};
	},

	render() {
		return (
			<CardList cards={this.state.cards} />
		)
	}
});

module.exports = CardListPage;
