function profileController($scope, postService, userService, $location, $routeParams) {
  if (!localStorage.getItem("user"))
    $location.path('/');
  
  $scope.logout = function() {
    userService.logout($location);
  }
  
  var user = localStorage.getItem("user");
  var userInUrl = $routeParams.username;
  var dato  = {};
  dato.author = userInUrl;
  $scope.user = user;

  postService.getAllOne(dato)
  	.success(function(data){
  		$scope.posts = data;
  	})
  	.error(function(data) {
  		console.log('error : ' + data);
  	});
}