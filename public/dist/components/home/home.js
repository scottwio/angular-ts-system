var home_component_1 = require('./home.component');
var homeModule = angular.module('home', ['ui.router'])
    .config(config)
    .directive('home', home_component_1.default);
config.$inject = ['$stateProvider', '$urlRouterProvider'];
function config($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('home', {
        url: '/',
        template: '<home></home>'
    });
}
exports.default = homeModule;
//# sourceMappingURL=home.js.map