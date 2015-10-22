function mainController($scope, $http, userService, postService, $location ) {
  if (!localStorage.getItem("user"))
    $location.path('/');
  
  $scope.logout = function() {
    userService.logout($location);
  }
  
  var user = localStorage.getItem("user");
  var dato = {};
  $scope.user = user;
  
  postService.getAll()
    .success(function(data) {
      $scope.posts = data;
    })
    .error(function(data) {
      console.log('Error: ' + data);
    });
  $scope.goTo = function(id) {
    $location.path('/post/' + id);
  }
}