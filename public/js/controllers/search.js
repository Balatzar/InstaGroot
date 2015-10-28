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