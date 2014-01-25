'use strict';

describe('Filter: splitToColumns', function () {
	beforeEach(module('gdgilSiteApp'));

	var splitToColumns;

	beforeEach(inject(function ($filter) {
		splitToColumns = $filter('splitToColumns');
	}));

	it('should gracefully handle null/undefined values', function () {
		expect(splitToColumns(undefined, 4)).toBeUndefined();
		expect(splitToColumns(null, 4)).toBeNull();
	});

	it('should split the given array into 2 slices if the number of slices is 2', function () {
		expect(splitToColumns([4, 5, 6, 7, 8, 9], 2)).toEqual([
			[4, 6, 8],
			[5, 7, 9]
		]);
	});

	it('should split the given array into 4 slices if the number of slices is 4', function () {
		expect(splitToColumns([4, 5, 6, 7, 8, 9], 4)).toEqual([
			[4, 8],
			[5, 9],
			[6],
			[7]
		]);
	});

	it('should create number of slices equal to the array length if the requested number of slices is greater than the array length', function () {
		expect(splitToColumns([4, 5, 6], 4)).toEqual([
			[4],
			[5],
			[6]
		]);
	});
});
