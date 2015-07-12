var about_component_1 = require('./about.component');
var aboutRouterModule = angular.module('about', [
    'ui.router',
    about_component_1.default.name
])
    .config(config);
config.$inject = ['$stateProvider'];
function config($stateProvider) {
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
    });
}
exports.default = aboutRouterModule;
//# sourceMappingURL=about.route.js.map