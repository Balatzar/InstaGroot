function postController($scope, postService) {
  var user = localStorage.getItem("user");
  var dato = {};
  $scope.user = user;
  
  $scope.jeclick = function(){
    console.log($scope.vm.picture);
    dato.picture = $scope.vm.picture;
    dato.author = user;
    postService.post(dato)
      .success(function(data) {
        console.log(data);
      })
      .error(function(data) {
        console.log('Error : ' + data);
      });
  }
}