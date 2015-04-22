var React = require('react');

require('./Card.less');

var Card = React.createClass({
	propTypes: {
		card: React.PropTypes.object.isRequired
	},

	render() {
		var card = this.props.card;
		return (
			<div className='card'>
				<img className='card-image' src={'/_/images/' + card.img} alt={card.name} title={card.name} />
			</div>
		);
	}
});

module.exports = Card;
