function formController($scope, $http) {
  var dato = {};
  $scope.log = true;
  $scope.logState = "Sign Up";

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

  $scope.switch = function() {
    if ($scope.log) {
      $scope.log = false;
      $scope.logState = "Log In";
    } else {
      $scope.log = true;
      $scope.logState = "Sign Up";
    }
  };

}