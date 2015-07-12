var home_route_1 = require('./home/home.route');
var about_route_1 = require('./about/about.route');
var componentModule = angular.module('app.components', [
    home_route_1.default.name,
    about_route_1.default.name
]);
exports.default = componentModule;
//# sourceMappingURL=components.js.map