function postController($scope, postService) {
  var user = localStorage.getItem("user");
  var dato = {};
  $scope.user = user;
  
  $scope.jeclick = function(){
    dato.author = $scope.user;
    dato.picture = $scope.vm.picture;
    dato.title = $scope.$$childTail.title;
    getTags($scope.$$childTail.description);
    console.log(dato);
    postService.post(dato)
      .success(function(data) {
        console.log(data);
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
      }
      else {
        inTag = false;
        temp = "";
        ++j;
      }
      ++i;
    }
    dato.description = description;
    dato.tags = tags;
  }
}