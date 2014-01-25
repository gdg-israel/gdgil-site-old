'use strict';

angular.module('gdgilSiteApp')
	.filter('splitToColumns', function () {
		return _.memoize(function (array, numColumns) {
			if (!array) {
				return array;
			}
			var result = [];
			for (var i = 0; i < array.length; i++) {
				var columnIndex = i % numColumns;
				if (angular.isUndefined(result[columnIndex])) {
					result[columnIndex] = [];
				}
				result[columnIndex].push(array[i]);
			}

			return result;
		});
	});