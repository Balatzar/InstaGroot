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
    postService.putLike({id:post._id})
     .success(function(data){
        for (var i = 0; i < $scope.posts.length;i++){
          if (data._id == $scope.posts[i]._id) {
            $scope.posts[i].likes = data.likes;
            break;
          }
        }
    })
     .error(function(data){
        console.log("error");
     })
  }
  
}