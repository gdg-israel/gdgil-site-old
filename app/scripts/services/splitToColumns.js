'use strict';

angular.module('gdgilSiteApp')
	.service('splitToColumns', function () {
		this.splitToColumns =
			function (array, numColumns) {
				var result = [];
				for (var i = 0; i < array.length; i++) {
					var columnIndex = i % numColumns;
					if (angular.isUndefined(result[columnIndex])) {
						result[columnIndex] = [];
					}
					result[columnIndex].push(array[i]);
				}

				return result;
			};
	});
