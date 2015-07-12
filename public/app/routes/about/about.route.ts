import aboutComponentModule from './about.component';

let aboutRouterModule = angular.module('about', [
	'ui.router',
	aboutComponentModule.name
])
.config(config)

config.$inject = ['$stateProvider'];

function config ($stateProvider) {
		$stateProvider
		.state('about', {
			url: '/about',
			abstract: true,
			template: '<ui-view></ui-view>'
		})
		.state('about.state1', {
			url: '',
			template: '<about></about>'
		})
		.state('about.state2', {
			url: '/state2',
			template: 'The second state'
		})
}

export default aboutRouterModule;