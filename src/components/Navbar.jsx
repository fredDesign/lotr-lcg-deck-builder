var Bootstrap = require('react-bootstrap');
var React = require('react');
var Router = require('react-router');
var RouterBootstrap = require('react-router-bootstrap');

require('./Navbar.less');

var Navbar = React.createClass({
	render() {
		return (
			<Bootstrap.Navbar brand='LOTR LCG Deck Builder' toggleNavKey={'toggleNav'}>
				<Bootstrap.CollapsableNav eventKey={'toggleNav'}>
					<Bootstrap.Nav navbar>
						<RouterBootstrap.NavItemLink to='cardList'>Card List</RouterBootstrap.NavItemLink>
					</Bootstrap.Nav>
				</Bootstrap.CollapsableNav>
			</Bootstrap.Navbar>
		);
	}
});

module.exports = Navbar;
