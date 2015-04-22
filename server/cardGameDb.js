var rp = require('request-promise');
var vm = require('vm');
var _ = require('lodash');

module.exports = {
	hero: function () {
		return rp({
			uri: 'http://www.cardgamedb.com/deckbuilders/thelordoftherings/database/lotrherojson-cgdb-mec38.jgz',
			gzip: true
		})
		.then(parseResponse('cardsHero'))
		.then(function (cards) {
			return cards.map(cleanUpHeroCard);
		});
	},

	encounter: function () {
		return rp({
			uri: 'http://www.cardgamedb.com/deckbuilders/thelordoftherings/database/lotrencounterjson-cgdb.jgz',
			gzip: true
		})
		.then(parseResponse('cardsEncounter'));
	}
}

function parseResponse(propertyName) {
	return function (text) {
		var sandbox = {};
		vm.runInNewContext(text, sandbox);
		return sandbox[propertyName];
	};
}

function cleanUpHeroCard(card) {
	return {
		name: _.unescape(card.name),
		id: card.id,
		unique:
			card.unique === 'Yes' ? true :
			card.unique === 'No' ? false :
			(function () {
				console.error('Cannot parse field "unique" on card ' + card.name);
				return;
			})(),
		type: card.type,
		sphere: _.capitalize(card.sphere),
		cost: card.cost,
		textcost: card.textcost,
		threat: card.th,
		willpower: card.wt,
		attack: card.atk,
		defense: card.def,
		hp: card.hp,
		traits: card.trait.split('. '),
		text: card.text,
		setname: card.setname,
		setindex: card.num,
		img: card.img,
		packquantity: card.packquantity === '' ?
			'3' :
			card.packquantity,
		max: card.max,
		victory: card.victory
	};
}