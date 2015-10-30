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
    getTags($scope.$$childTail.description);
    postService.post(dato)
      .success(function(data) {
        console.log(data);
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

<<<<<<< HEAD
    //Function that adds the css class for the pic filters
    var idx = 0;
    var filters = ['grayscale', 'sepia', 'blur', 'brightness',
                  'contrast', 'hue-rotate', 'hue-rotate2',
                  'hue-rotate3', 'saturate', 'invert', ''];
    var filters2 = ['aden', 'reyes', 'perpetua', 'inkwell',
                    'toaster', 'walden', 'hudson', 'gingham',
                    'mayfair', 'lofi', 'xpro2', '_1997', 'brooklyn', ''];

  $scope.filter = function() {
    var el = document.querySelector('img');
    el.className = '';
    var effect = filters[idx++ % filters.length]; // loop through filters.
    if (effect) {
      el.classList.add(effect);
      dato.filter = effect;
    } else { dato.picture = ''; }
  }
}
