function mainController($scope, $http) {
  var user = localStorage.getItem("user");
  var dato = {};
  $scope.user = user;
  
  $scope.jeclick = function(){
    console.log($scope.vm.picture);
    dato.picture = $scope.vm.picture;
    dato.author = localStorage.getItem("user");
    $http.post('/api/posts', dato)
      .success(function(data) {
        console.log(data);
      })
      .error(function(data) {
        console.log('Error : ' + data);
      });
  }
}