'use strict';

angular.module('gdgilSiteApp')
	.service('contentProvider', function ($http, $resource) {
		this.getItem = function (id) {
			var item = {};
			$http.get('/mock/videos.json').success(function (result) {
				angular.forEach(result, function (candidate) {
					if (candidate.id === id) {
						angular.extend(item, candidate);
					}
				});
			});
			return item;
		};

		this.getItems = function () {
			return $resource('/mock/videos.json').query();
		};
	});
