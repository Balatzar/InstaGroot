function formController($scope, $http) {
  var dato = {};
  
  $scope.createUser = function() {
    dato.name = $scope.name;
    dato.lastname = $scope.lastname;
    dato.username = $scope.username;
    dato.password = $scope.password;
    $http.post('/api/users', dato)
      .success(function(data) {
        localStorage.setItem("user", dato.username);
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