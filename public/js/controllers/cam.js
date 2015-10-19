function camController($scope, $http) {
  $scope.title = "Caméra";
  
  var dato = {};
  
  $scope.jeclick = function(){
    console.log($scope.vm.picture);
    dato.picture = $scope.vm.picture;
    $http.post('/api/posts', dato)
      .success(function(data) {
        console.log(data);
      })
      .error(function(data) {
        console.log('Error : ' + data);
      });
  }
}