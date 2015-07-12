var homeComponentModule = angular.module('homeComponentModule', []).directive('home', function () {
    return {
        templateUrl: 'app/routes/home/home.html',
        restrict: 'E',
        controllerAs: 'vm',
        scope: {},
        bindToController: true,
        controller: (function () {
            function HomeController() {
                this.name = 'home';
            }
            return HomeController;
        })()
    };
});
exports.default = homeComponentModule;
//# sourceMappingURL=home.component.js.map