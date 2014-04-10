'use strict';

angular.module('gdgilSiteApp')
	.controller('ExpertsCtrl', function ($scope, $resource, splitToColumns) {
		$scope.experts = $resource('/mock/experts.json').query();
		$scope.$watchCollection('experts', function(experts) {
			$scope.expertsInColumns = splitToColumns.splitToColumns(experts, 4);
		})
	});
