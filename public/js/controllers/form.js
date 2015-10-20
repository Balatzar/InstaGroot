function formController($scope, $http, userService) {
  var dato = {};
  $scope.log = true;
  $scope.logState = "Sign Up";

  $scope.createUser = function() {
    var dato = {};
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

  $scope.checkUser = function() {
     var dato = {}
     dato.username = $scope.username;
     dato.pwd = $scope.password;
     $http.post('/api/login', dato).then(function(res){
        //SUCCESS
        console.log(res);
     }, function(){
        alert('miaouu');
     });
  }

}