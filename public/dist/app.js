// from public
// tsc --watch --sourceMap --outDir dist --module system -t es5 app/**/*.ts
// jspm bundle-sfx dist/app dist/bundle.js -m
/// <reference path="../typings/tsd.d.ts" />
// Globals
var angular_1 = require('angular');
var angular_ui_router_1 = require('angular-ui-router');
// Component routes
var home_route_1 = require('./routes/home/home.route');
var about_route_1 = require('./routes/about/about.route');
// Common
var navbar_1 = require('./common/navbar/navbar');
// pull in gloabl libs
angular_ui_router_1.default;
angular_1.default;
// app wrapper
angular.module('app', [
    'ui.router',
    navbar_1.default.name,
    home_route_1.default.name,
    about_route_1.default.name
])
    .directive('app', function appComponent() {
    return {
        templateUrl: 'app/app.html',
        restrict: 'E'
    };
});
//boot
angular.bootstrap(document, ['app']);
//# sourceMappingURL=app.js.map