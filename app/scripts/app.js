'use strict';

angular.module('gdgilSiteApp', [
		'ngResource',
		'ngRoute',
		'ui.bootstrap',
		'truncate'
	])
	.config(function ($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'views/main.html',
				controller: 'MainCtrl'
			})
			.when('/events', {
				templateUrl: 'views/events.html',
				controller: 'MainCtrl'
			})
			.when('/videos', {
				templateUrl: 'views/videos.html',
				controller: 'VideosCtrl'
			})
			.when('/articles', {
				templateUrl: 'views/articles.html',
				controller: 'ArticlesCtrl'
			})
			.otherwise({
				redirectTo: '/'
			});
	});
