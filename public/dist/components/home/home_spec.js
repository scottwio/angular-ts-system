var home_1 = require('./home');
var home_controller_1 = require('./home.controller');
var home_component_1 = require('./home.component');
describe('Home', function () {
    var $rootScope, makeController;
    beforeEach(window.module(home_1.default.name));
    beforeEach(inject(function (_$rootScope_) {
        $rootScope = _$rootScope_;
        makeController = function () {
            return new home_controller_1.default();
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
        var component = home_component_1.default();
        it('should use controllerAs', function () {
            expect(component["controllerAs"]).toBeDefined();
        });
        it('should use the right controller', function () {
            expect(component.controller).toEqual(home_controller_1.default);
        });
    });
});
//# sourceMappingURL=home_spec.js.map