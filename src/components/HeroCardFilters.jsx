var Bootstrap = require('react-bootstrap');
var React = require('react');

var actions = require('../actions');

var HeroCardFilters = React.createClass({
	propTypes: {
		filters: React.PropTypes.instanceOf(require('../models/HeroCardFilters')).isRequired
	},

	handleSearch(e) {
		actions.search(e.target.value);
	},

	handleSphereClick(sphere) {
		actions.toggleSphere(sphere);
	},

	render() {
		var searchIcon = (<i className='fa fa-search'></i>);
		return (
			<div>
				<Bootstrap.Input type='text' addonBefore={searchIcon} value={this.props.filters.searchText} onChange={this.handleSearch}></Bootstrap.Input>
				{['Leadership', 'Tactics', 'Spirit', 'Lore'].map(sphere => (
					<Bootstrap.Button active={this.props.filters.spheres[sphere]} onClick={this.handleSphereClick.bind(this, sphere)}>
						{sphere}
					</Bootstrap.Button>
				))}
			</div>
		);
	}
});

module.exports = HeroCardFilters;
