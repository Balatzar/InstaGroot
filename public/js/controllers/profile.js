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
  var afterLoad = false;
  
  // set the default amount of items being displayed
  $scope.limit = 5;

  // loadMore function
  $scope.loadMore = function() {
    if(afterLoad === true)
      $scope.limit += 5;
    afterLoad = true;
  };

  postService.getAllOne(dato)
  	.success(function(data){
  		$scope.posts = data;
  	})
  	.error(function(data) {
  		console.log('error : ' + data);
  	});
  
  $scope.goTo = function(id) {
    $location.path('/post/' + id);
  }

  $scope.putLike = function(post){
    alert("miaou");
    postService.putLike({id:post._id})
     .success(function(data){
      alert("miaou2");
     })
     .error(function(data){
        console.log("error");
     })
  }
}