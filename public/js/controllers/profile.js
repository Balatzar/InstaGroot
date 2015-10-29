function profileController($scope, postService, userService, $location, $routeParams, conversationService) {
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

  $scope.patata = true;

  $scope.patato = function() {
    $scope.patata = false;
  }

  $scope.startConv = function() {
    dato.message = {};
    dato.message.text = $scope.text;
    dato.message.author = user;
    var people = [];
    people.push(user);
    people.push(userInUrl);
    dato.authors = people;
    console.log(dato)
    conversationService.post(dato)
      .success(function(data) {
        $location.path('/edit');
      })
      .error(function(data) {
        console.log(data);
      })
  }

  postService.getAllOne(dato)
    .success(function(data){
      $scope.posts = data;
      $scope.profil = data[0].author;
    })
    .error(function(data) {
      console.log('error : ' + data);
    });

  $scope.goTo = function(id) {
    $location.path('/post/' + id);
  }

  $scope.putLike = function(post) {
    if (post.likes.indexOf(user) == -1) {
      postService.putLike({id:post._id, user:user})
     .success(function(data){
        /*for (var i = 0; i < $scope.posts.length;i++){
          if (data._id == $scope.posts[i]._id) {
            $scope.posts[i].likes = data.likes;
            break;
          }
        }*/
        postService.getAllOne(dato)
          .success(function(data){
            $scope.posts = data;
            $scope.profil = data[0].author;
          })
          .error(function(data) {
            console.log('error : ' + data);
          });
      })
       .error(function(data){
          console.log("error");
       })
    } else {
      postService.putUnlike({id:post._id, user:user})
       .success(function(data){
          /*for (var i = 0; i < $scope.posts.length;i++){
            if (data._id == $scope.posts[i]._id) {
              $scope.posts[i].likes = data.likes;
              break;
            }
          }*/
        postService.getAllOne(dato)
          .success(function(data){
            $scope.posts = data;
            $scope.profil = data[0].author;
          })
          .error(function(data) {
            console.log('error : ' + data);
          });
      })
       .error(function(data){
          console.log("error");
       })
    }
  }
}
