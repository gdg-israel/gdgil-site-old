'use strict';

angular.module('gdgilSiteApp')
	.service('parse', function ($window, $q) {
		var Parse = $window.Parse;

		Parse.initialize('sgFDoWiQFc7pnN4LtOJoogLj50b8RUBFY4Bx1lm8', '3HcyI8fgzisvpNHGBo73ti7zXGsyNH4zd2XfC0EX');

		var Content = Parse.Object.extend('Content');

		this.getContentItems = function () {
			var query = new Parse.Query(Content);
			var result = [];
			$q.when(query.find()).then(function (collection) {
				angular.forEach(collection, function(item) {
					result.push(item.attributes);
				});
			});
			return result;
		};
	});
