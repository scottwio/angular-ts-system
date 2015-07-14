import homeComponentModule from './home.component';

var homeRouterModule = angular.module('home', [
	'ui.router',
	homeComponentModule.name
])
.config(config)

config.$inject = ['$stateProvider', '$urlRouterProvider'];

function config($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/');
	$stateProvider
		.state('home', {
			url: '/',
			template: '<home></home>'
		});
}

export default homeRouterModule;