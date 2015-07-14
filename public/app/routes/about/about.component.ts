interface Person {
	firstname: string;
	lastname: string;
}

class AboutController {
	name: string;
	myNumber: number;
	person: Object;
	
	constructor() {
		this.myNumber = 1;
		this.name = 'about';
		this.person = this.setPerson({
			firstname:'jess',
			lastname:'jakes'
		});
	}
	setPerson(person: Person) {
		return person;
	}
}

AboutController.$inject = ['$timeout'];

///////////////////////////////////////

var aboutComponentModule = angular.module('aboutComponentModule', [
]).directive('about', function() {
	return {
		templateUrl: 'app/routes/about/about.html',
		restrict: 'E',
		controllerAs: 'vm',
		scope: {},
		bindToController: true,
		controller: AboutController
	};
});

export default aboutComponentModule;

