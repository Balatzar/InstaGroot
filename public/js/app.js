function config($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'views/main.html',
			controller: 'mainController'
		})
        .when('/signup', {
			templateUrl: 'views/signup.html',
			controller: 'signupController'
		})
		.otherwise({
			redirectTo: '/'
		});
}

function run($rootScope, $location){
	//Nothing
}

angular.module('app', ['ngRoute'])
    .config(config)
    .controller('mainController', mainController)
    .controller('signupController', signupController)
    .service('todoService', todoService)
    .service('userService', userService)
    /*.factory('', )*/
    .run(run);


