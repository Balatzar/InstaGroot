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
    localStorage.setItem("user", dato.username);
    $http.post('/api/users', dato)
      .success(function(data) {
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