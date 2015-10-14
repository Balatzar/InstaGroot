function formController($scope, $http) {
  $scope.title = "ça marche";
  var dato = {};
  
  $scope.createUser = function() {
    if (!$scope.username || $scope.username === "") { return }
    if (!$scope.password || $scope.password === "") { return }
    dato.username = $scope.username;
    dato.password = $scope.password;
    $http.post('/api/users', dato)
      .success(function(data) {
        $scope.username = "";
        $scope.password = "";
        console.log(data)
      })
      .error(function(data) {
        console.log('Error : ' + data);
      });
  }
}