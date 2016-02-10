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

<<<<<<< HEAD
  $scope.putLike = function(post) {
    if (post.likes.indexOf(user) == -1) {
      postService.putLike({id:post._id, user:user})
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
    } else {
      postService.putUnlike({id:post._id, user:user})
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

}
=======
  $scope.sendMsg = function(post) {
    dato = {};
    dato.id = post._id;
    dato.text = $scope.textMsg;
    dato.author = user;
    postService.message(dato).then(function(data) {
      $scope.post = data.data;
      $scope.textMsg = "";
    }, function(data) {
      console.log("error : " + data);
    })
    $scope.papote = true;
  }
}
>>>>>>> dev
