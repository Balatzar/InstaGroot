// public.app.js

function config($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'views/main.html',
            controller: 'mainController'
		})
        .when('/list/:list', {
			templateUrl: 'views/list.html',
            controller: 'listController'
		})
}

angular.module('todoyes', ['ngRoute'])
    .config(config)
    .controller('mainController', mainController)
    .controller('listController', listController)