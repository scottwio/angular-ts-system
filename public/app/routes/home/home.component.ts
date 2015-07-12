
var homeComponentModule = angular.module('homeComponentModule', [
	
]).directive('home', function() {
	return {
		templateUrl: 'app/routes/home/home.html',
		restrict: 'E',
		controllerAs: 'vm',
		scope: {},
		bindToController: true,
		controller: class HomeController {
			name: string;
			constructor() {
				this.name = 'home';
			}
		}
	};	
});

export default homeComponentModule;