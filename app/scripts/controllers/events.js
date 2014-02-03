'use strict';

angular.module('gdgilSiteApp')
	.controller('EventsCtrl', function ($scope, $resource) {
		$scope.events = $resource('/mock/events.json').query();

		$scope.$watch('ownerSearch', function () {
			$scope.locationSearch = null;
		});
	})
	.filter('unique', function () {
		return function (input, key) {
			var unique = {};
			var uniqueList = [];
			for (var i = 0; i < input.length; i++) {
				if (typeof unique[input[i][key]] == "undefined") {
					unique[input[i][key]] = "";
					uniqueList.push(input[i]);
				}
			}
			return uniqueList;
		};
	})

