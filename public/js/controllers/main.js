function mainController($scope, $http, userService, postService, $location) {
  if (!localStorage.getItem("user"))
    $location.path('/');
  
  $scope.logout = function() {
    userService.logout($location);
  }
  
  var user = localStorage.getItem("user");
  var dato = {};
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
  
  postService.getAll()
    .success(function(data) {
      $scope.posts = data;
    })
    .error(function(data) {
      console.log('Error: ' + data);
    });
  
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