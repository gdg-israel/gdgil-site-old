'use strict';

module.exports = function (config) {
	config.set({
		basePath: '',
		frameworks: ['jasmine'],
		logLevel: config.LOG_INFO,
		autoWatch: true,
		browsers: ['PhantomJS'],
		browserNoActivityTimeout: 60000,
		files: [
			'app/bower_components/es5-shim/es5-shim.js',
			'app/bower_components/jquery/jquery.js',
			'app/bower_components/angular/angular.js',
			'app/bower_components/angular-mocks/angular-mocks.js',
			'app/bower_components/angular-route/angular-route.js',
			'app/bower_components/angular-resource/angular-resource.js',
			'app/bower_components/angular-truncate/dist/angular-truncate.js',
			'app/bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
			'app/scripts/*.js',
			'app/scripts/**/*.js',
			'test/spec/**/*.js'
		],
		preprocessors: {
			'app/scripts/{,controllers/,directives/,filters/,services/}*.js': 'coverage'
		},
		reporters: ['dots', 'coverage']
	});
};
