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
    .when('/edit/:conv', {
      templateUrl: 'views/conv.html',
      controller: 'convController'
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
    .when('/post', {
      templateUrl: 'views/post.html',
      controller: 'postController'
  })
    .when('/post/:post', {
      templateUrl: 'views/onepost.html',
      controller: 'onePostController'
  })
    .when('/profile/:username', {
      templateUrl: 'views/profile.html',
      controller: 'profileController'
  })
    .when('/profile/:username/dm', {
      templateUrl: 'views/dm.html',
      controller: 'dmController'
  })
    .when('/main/search', {
      templateUrl: 'views/search.html',
      controller: 'searchController'
    })
    .otherwise({
      redirectTo: '/'
  })
}

angular.module('instagroot', ['ngRoute', 'camera', 'infinite-scroll'])
  .config(config)
  .controller('formController', formController)
  .controller('mainController', mainController)
  .controller('editController', editController)
  .controller('adminController', adminController)
  .controller('postController', postController)
  .controller('onePostController', onePostController)
  .controller('profileController',profileController)
  .controller('searchController', searchController)
  .controller('dmController', dmController)
  .controller('convController', convController)
  .service('userService', userService)
  .service('postService', postService)
  .service('conversationService', conversationService)
