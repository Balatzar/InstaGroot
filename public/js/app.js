// public.app.js

function config($routeProvider) {
	$routeProvider
		.when('/', {
		templateUrl: 'views/form.html',
		controller: 'formController'
	})
		.when('/main', {
		templateUrl: 'views/main.html',
		controller: 'mainController'
	})
		.when('/edit', {
		templateUrl: 'views/edit.html',
		controller: 'editController'
	})
		.when('/todo', {
		templateUrl: 'views/todo.html',
		controller: 'todoController'
	})
		.when('/list/:list', {
		templateUrl: 'views/list.html',
		controller: 'listController'
	})
		.when('/admin', {
		templateUrl: 'views/admin.html',
		controller: 'adminController'
	})
}

angular.module('instagroot', ['ngRoute', 'camera', 'infinite-scroll'])
	.config(config)
	.controller('todoController', todoController)
	.controller('listController', listController)
	.controller('formController', formController)
	.controller('mainController', mainController)
	.controller('editController', editController)
	.controller('adminController', adminController)
	.service('userService', userService)