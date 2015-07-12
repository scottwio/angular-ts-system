var home_component_1 = require('./home.component');
var homeRouterModule = angular.module('home', [
    'ui.router',
    home_component_1.default.name
])
    .config(config);
config.$inject = ['$stateProvider', '$urlRouterProvider'];
function config($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('home', {
        url: '/',
        template: '<home></home>'
    });
}
exports.default = homeRouterModule;
//# sourceMappingURL=home.route.js.map