function searchController($scope, postService, $location) {
  var url = self.location.href;
  var search = ""
  var i = 0;
  while (url[i++] != "#");
  while (url[i++] != "#");
  i -= 1;
  while (url[i++])
    search += url[i - 1];
  $scope.title = search;
  var dato = {};
  dato.search = search;
  postService.search(dato).then(
  function(res) {
    $scope.posts = res.data;
  }), function(res) {
    console.log("erreur" + res);
  }
  
  $scope.goTo = function(id) {
    $location.path('/post/' + id);
  }

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