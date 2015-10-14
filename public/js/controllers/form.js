function formController($scope, $http) {
  var dato = {};
  
  $scope.createUser = function() {
    if (!$scope.name || $scope.name === "") { return }
    if (!$scope.lastname || $scope.lastname === "") { return }
    if (!$scope.username || $scope.username === "") { return }
    if (!$scope.password || $scope.password === "") { return }
    dato.name = $scope.name;
    dato.lastname = $scope.lastname;
    dato.username = $scope.username;
    dato.password = $scope.password;
    $http.post('/api/users', dato)
      .success(function(data) {
        localStorage.setItem("user", dato.username);
        b6f542147b1d1b26a1b349b50f57d81c620d1dcc
        $scope.name = "";
        $scope.lastname = "";
        $scope.username = "";
        $scope.password = "";
        console.log(data);
      })
      .error(function(data) {
        console.log('Error : ' + data);
      });
  }
}