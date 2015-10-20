function formController($scope, userService, $location) {
  var dato = {};
  $scope.log = true;
  $scope.logState = "Sign Up";

  $scope.createUser = function() {
    dato.name = $scope.name;
    dato.lastname = $scope.lastname;
    dato.username = $scope.username;
    dato.password = $scope.password;
    userService.post(dato)
      .then(function(data) {
        localStorage.setItem("user", dato.username);
        $scope.name = "";
        $scope.lastname = "";
        $scope.username = "";
        $scope.password = "";
        console.log(data);
        $location.path('/main');
      });
  }

  $scope.switch = function() {
    $scope.password = "";
    if ($scope.log) {
      $scope.log = false;
      $scope.logState = "Log In";
    } else {
      $scope.log = true;
      $scope.logState = "Sign Up";
    }
  };

  $scope.checkUser = function() {
     dato.username = $scope.username;
     dato.pwd = $scope.password;
     userService.check(dato).then(function(res){
       //SUCCESS
       console.log(res);
       $location.path('/main');
     }, function(){
        alert('miaouu');
        $scope.username = "";
        $scope.password = "";
     });
  }

}