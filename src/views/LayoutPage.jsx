var Bootstrap = require('react-bootstrap');
var React = require('react');
var Router = require('react-router');

var Navbar = require('../components/Navbar');

var LayoutPage = React.createClass({
	render() {
		return (
			<div>
				<Navbar />
				<Bootstrap.Grid>
					<Router.RouteHandler />
				</Bootstrap.Grid>
			</div>
		)
	}
});

module.exports = LayoutPage;
