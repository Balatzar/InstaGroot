function postController($scope, postService) {
  var user = localStorage.getItem("user");
  var dato = {};
  $scope.user = user;
  
  $scope.jeclick = function(){ 
    dato.author = $scope.user;
    dato.picture = "$scope.vm.picture";
    dato.title = $scope.$$childTail.title;
    dato.description = $scope.$$childTail.description;
    dato.tags = $scope.$$childTail.tags;
    console.log(dato);
    postService.post(dato)
      .success(function(data) {
        console.log(data);
      })
      .error(function(data) {
        console.log('Error : ' + data);
      });
  }
}