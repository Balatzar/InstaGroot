function postController($scope, postService, userService, $location) {
  if (!localStorage.getItem("user"))
    $location.path('/');
  
  $scope.logout = function() {
    userService.logout($location);
  }
  
  var user = localStorage.getItem("user");
  var dato = {};
  $scope.user = user;
  
  $scope.jeclick = function(){
    dato.author = $scope.user;
    dato.picture = $scope.vm.picture;
    dato.title = $scope.$$childTail.title;
    getTags($scope.$$childTail.description);
    postService.post(dato)
      .success(function(data) {
        console.log(data);
        $scope.$$childTail.title = "";
        $scope.$$childTail.description = "";
        $location.path("/main");
      })
      .error(function(data) {
        console.log('Error : ' + data);
      });
  }
  
  function getTags(desc) {
    var description = "";
    var tags = [];
    var i = 0;
    var j = 0;
    var temp = "";
    var inTag = false;
    while (desc[i]) {
      if (!inTag && desc[i] != "#")
        description += desc[i];
      else if (desc[i] != ' ') {
        temp += desc[i]
        tags[j] = temp;
        inTag = true;
      }
      else {
        inTag = false;
        temp = "";
        ++j;
      }
      ++i;
    }
    console.log(description);
    console.log(tags);
    dato.description = description;
    dato.tags = tags;
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