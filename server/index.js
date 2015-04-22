var argv = require('minimist')(process.argv.slice(2));
var express = require('express');
var path = require('path');
var proxy = require('express-http-proxy');
var url = require('url');

var cardGameDb = require('./cardGameDb');

var assetsPublicPath = argv.publicPath || '/';

var app = express();
app.set('view engine', 'jade');
app.set('views', path.join(__dirname, '../templates'));

app.use('/', express.static(path.join(__dirname, '../public')));

app.use('/_/images', proxy('www.cardgamedb.com', {
	forwardPath: function (req, res) {
		return '/forums/uploads/lotr/' + url.parse(req.url).path;
	}
}));

app.get('/_/hero.json', function (req, res) {
	cardGameDb.hero()
		.then(res.json.bind(res))
		.catch(function (err) {
			res.status(500).send(err);
		});
});

app.get('/_/encounter.json', function (req, res) {
	cardGameDb.encounter()
		.then(res.json.bind(res))
		.catch(function (err) {
			res.status(500).send(err);
		});
});

app.get('/*', function (req, res) {
	res.render('app', {
		publicPath: assetsPublicPath
	});
});

var server = app.listen(3000, function () {
	var host = server.address().address;
	var port = server.address().port;
	console.log('Server listening at http://%s:%s', host, port);
});
