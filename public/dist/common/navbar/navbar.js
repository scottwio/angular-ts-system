var navbarComponentModule = angular.module('navbarComponentModule', []).directive('navbar', function () {
    return {
        templateUrl: 'app/common/navbar/navbar.html',
        restrict: 'E',
        controllerAs: 'vm',
        scope: {},
        bindToController: true,
        controller: (function () {
            function NavbarController() {
                this.name = 'navbar';
            }
            return NavbarController;
        })()
    };
});
exports.default = navbarComponentModule;
//# sourceMappingURL=navbar.js.map