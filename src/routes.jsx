var React = require('react');
var Router = require('react-router');

var CardListPage = require('./views/CardListPage');
var LayoutPage = require('./views/LayoutPage');

module.exports = (
	<Router.Route path='/' handler={LayoutPage}>
		<Router.DefaultRoute name='cardList' handler={CardListPage} />
	</Router.Route>
);
