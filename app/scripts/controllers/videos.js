'use strict';

angular.module('gdgilSiteApp')
	.controller('VideosCtrl', function ($scope) {
		$scope.videos = [
			{
				title: 'Google Cloud Platform - What\'s Hot, New and Cool about it?',
				youtube: '6RVSTZJNgXY',
				speaker: 'Ido Green',
				description: 'How can developers leverage the \'mother of all clouds\' in their next project? Lots of options... :) That are using Google cloud platform. We will also see, how you built a powerful API on the cloud and use it from mobile and modern web apps.'
			}
		];
	});
