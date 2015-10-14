// public.app.js

function config($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'views/form.html',
            controller: 'formController'
		})
		.when('/todo', {
			templateUrl: 'views/todo.html',
            controller: 'todoController'
		})
        .when('/list/:list', {
			templateUrl: 'views/list.html',
            controller: 'listController'
		})
}

angular.module('todoyes', ['ngRoute'])
    .config(config)
    .controller('todoController', todoController)
    .controller('listController', listController)
    .controller('formController', formController)