function onePostController($scope, postService, $location, $routeParams, userService) {
  if (!localStorage.getItem("user"))
    $location.path('/');
  
  $scope.logout = function() {
    userService.logout($location);
  }
  
  var user = localStorage.getItem("user");
  var dato = {};
  $scope.user = user;
  var postId = $routeParams.post;
  
  postService.getOne(postId)
    .success(function(data) {
      $scope.post = data[0];
    })
    .error(function(data) {
      console.log('Error : ' + data);
    });

  $scope.putLike = function(post){
    postService.putLike({id:post._id})
     .success(function(data){
        for (var i = 0; i < $scope.posts.length;i++){
          console.log($scope.posts[i]._id);
          if (data._id == $scope.posts[i]._id) {
            $scope.posts[i].likes = data.likes;
            console.log($scope.posts[i].likes);
            break;
          }
        }
    })
     .error(function(data){
        console.log("error");
     })
  }
}