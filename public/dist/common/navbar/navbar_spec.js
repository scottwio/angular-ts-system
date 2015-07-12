var navbar_1 = require('./navbar');
var navbar_controller_1 = require('./navbar.controller');
var navbar_component_1 = require('./navbar.component');
describe('Navbar', function () {
    var $rootScope, makeController;
    beforeEach(window.module(navbar_1.default.name));
    beforeEach(inject(function (_$rootScope_) {
        $rootScope = _$rootScope_;
        makeController = function () {
            return new navbar_controller_1.default();
        };
    }));
    describe('Module', function () {
        // test things about the component module
        // checking to see if it registers certain things and what not
        // test for best practices with naming too
        // test for routing
    });
    describe('Controller', function () {
        // test your controller here
        it('should have a name property [REMOVE]', function () {
            var controller = makeController();
            expect(controller["name"]).toBeDefined();
        });
    });
    describe('Component', function () {
        // test the component/directive itself
        var component = navbar_component_1.default();
        it('should use controllerAs', function () {
            expect(component["controllerAs"]).toBeDefined();
        });
        it('should use the right controller', function () {
            expect(component.controller).toEqual(navbar_controller_1.default);
        });
    });
});
//# sourceMappingURL=navbar_spec.js.map