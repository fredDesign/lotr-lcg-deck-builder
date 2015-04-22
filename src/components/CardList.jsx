var React = require('react');

var Card = require('../components/Card');

var CardList = React.createClass({
	propTypes: {
		cards: React.PropTypes.arrayOf(React.PropTypes.object).isRequired
	},

	render() {
		return (
			<div>
				{this.props.cards.map(card => (<Card card={card} key={card.id} />))}
			</div>
		);
	}
});

module.exports = CardList;
