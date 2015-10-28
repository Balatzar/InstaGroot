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