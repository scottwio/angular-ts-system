var navbarComponentModule = angular.module('navbarComponentModule',[
]).directive('navbar', function () {
	return {
		templateUrl: 'app/common/navbar/navbar.html',
		restrict: 'E',
		controllerAs: 'vm',
		scope: {},
		bindToController: true,
		controller: class NavbarController {
			name: string;
			constructor() {
				this.name = 'navbar';
			}
		}
	};
}

export default navbarComponentModule;