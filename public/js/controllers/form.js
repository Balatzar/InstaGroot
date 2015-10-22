function formController($scope, userService, $location) {
  
  if (localStorage.getItem("user"))
    $location.path('/main')
    
  var dato = {};
  $scope.log = true;
  $scope.logState = "Sign Up";
  var t = JSON.stringify({user: $scope.username});
  var headers = {headers: {params: t }}


  $scope.createUser = function() {
    if ($scope.password != $scope.passwordConf) {
      alert("wrong password confirmation");
      vidage();
      return;
    }
    dato.name = $scope.name;
    dato.lastname = $scope.lastname;
    dato.username = $scope.username;
    dato.password = $scope.password;
    userService.getOne(dato.username).then(function(res){
      if (res.data.length == 0) {
        userService.post(dato)
        .then(function(data) {
          localStorage.setItem("user", dato.username);
          console.log(data);
          $location.path('/main');
        });
      } else {
        alert("Ce username est déjà pris!");
        $scope.username = "";
        $scope.password = "";
      }

  
    })
  }
  
  function vidage() {
    $scope.name = "";
    $scope.lastname = "";
    $scope.username = "";
    $scope.password = "";
    $scope.passwordConf = "";
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
       localStorage.setItem("user", dato.username);
       console.log(res);
       $location.path('/main');
     }, function(){
        alert('miaouu');
        $scope.username = "";
        $scope.password = "";
     });
  }

}