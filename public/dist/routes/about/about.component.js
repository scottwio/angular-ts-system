var aboutComponentModule = angular.module('aboutComponentModule', []).directive('about', function () {
    return {
        templateUrl: 'app/routes/about/about.html',
        restrict: 'E',
        controllerAs: 'vm',
        scope: {},
        bindToController: true,
        controller: (function () {
            function AboutController() {
                this.myNumber = 1;
                this.name = 'about';
            }
            return AboutController;
        })()
    };
});
exports.default = aboutComponentModule;
//# sourceMappingURL=about.component.js.map