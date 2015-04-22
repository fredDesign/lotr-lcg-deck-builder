var React = require('react');
var Router = require('react-router');

var CardListPage = require('./views/CardListPage');

module.exports = (
	<Router.Route path='/'>
		<Router.DefaultRoute name='cardList' handler={CardListPage} />
	</Router.Route>
);
