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
}