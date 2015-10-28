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

  $scope.papote = true;

  $scope.papoto = function() {
    $scope.textMsg = "";
    $scope.papote = false;
  }

  $scope.sendMsg = function(post) {
    dato = {};
    dato.id = post._id;
    dato.text = $scope.textMsg;
    dato.author = user;
    postService.message(dato).then(function(data) {
      $scope.post = data.data;
    }, function(data) {
      console.log("error : " + data);
    })
    $scope.papote = true;
  }
}
