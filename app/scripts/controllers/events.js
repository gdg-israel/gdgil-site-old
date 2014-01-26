'use strict';

angular.module('gdgilSiteApp')
	.controller('EventsCtrl', function ($scope, $resource) {
		$scope.events = $resource('/mock/events.json').query();
	});
