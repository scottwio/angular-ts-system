var navbarComponentModule = angular.module('navbarComponentModule', []).directive(function () {
    console.log('loaded');
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
//# sourceMappingURL=navbar.component.js.map