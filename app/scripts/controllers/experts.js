'use strict';

angular.module('gdgilSiteApp')
	.controller('ExpertsCtrl', function ($scope, $resource) {
		$scope.experts = $resource('/mock/experts.json').query();
	});
