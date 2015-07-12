var aboutComponentModule = angular.module('aboutComponentModule', [
]).directive('about', function() {
	return {
		templateUrl: 'app/routes/about/about.html',
		restrict: 'E',
		controllerAs: 'vm',
		scope: {},
		bindToController: true,
		controller: class AboutController {
			name: string;
			myNumber: number;
			constructor() {
				this.myNumber = 1;
				this.name = 'about';
			}
		}
	};
});

export default aboutComponentModule;