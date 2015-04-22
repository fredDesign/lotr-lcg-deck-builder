var _ = require('lodash');

module.exports = class HeroCardFilters {
	constructor(
		searchText,
		spheres,
		maxResults
	) {
		this.searchText = searchText;
		this.spheres = spheres;
		this.maxResults = maxResults;
	}

	filter(cards) {
		var filteredCards = cards;
		filteredCards = this.filterSearchText(filteredCards);
		filteredCards = this.filterSpheres(filteredCards);
		filteredCards = this.filterMaxResults(filteredCards);
		return filteredCards;
	}

	filterSearchText(cards) {
		if (!this.searchText || !this.searchText.length)
			return cards;
		return cards.filter(card => stringSearch(card.name, this.searchText));
	}

	filterSpheres(cards) {
		if (!this.spheres || !_.some(this.spheres))
			return cards;
		return cards.filter(card => this.spheres[card.sphere]);
	}

	filterMaxResults(cards) {
		if (!this.maxResults)
			return cards;
		return cards.slice(0, this.maxResults);
	}
}

function stringSearch(haystack, needle) {
	haystack = _.deburr(haystack).toLowerCase();
	needle = needle.toLowerCase();
	return _.contains(haystack, needle);
}
