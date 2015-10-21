function onePostController($scope, postService, $location, $routeParams) {
  var user = localStorage.getItem("user");
  var dato = {};
  $scope.user = user;
  var postId = $routeParams.post;
  console.log(postId);
  
  postService.getOne(postId)
    .success(function(data) {
      console.log(data);
      $scope.post = data;
    })
    .error(function(data) {
      console.log('Error : ' + data);
    });
}