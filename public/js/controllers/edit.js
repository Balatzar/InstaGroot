function editController($scope, userService, $location) {
  if (!localStorage.getItem("user"))
    $location.path('/');
  
  var dato = {};
  $scope.okPassword = false;
  var t = JSON.stringify({user: localStorage.getItem("user")});
  var headers = {headers: {params: t }}
  $scope.editing = true;
  
  $scope.logout = function() {
    userService.logout($location);
  }
  
  $scope.change = function() {
    $scope.okPassword = true;
    $scope.askPass = "";
  }
  
  $scope.askPassword = function() {;
    console.log(dato);
    console.log($scope.askPass);
    if ($scope.askPass == dato.password) {
      $scope.okPassword = false;
      $scope.editing = false;
      userService.getOne(localStorage.getItem("user"))
        .success(function(data) {
          console.log(data);
        })
        .error(function(data) {
          console.log('Error : ' + data);
        });
    }
    else {
      alert("NOPE c'est pas le bon code");
      $scope.okPassword = true;
      $scope.askPass = "";
    }
  }

  userService.getOne(localStorage.getItem("user"))
    .success(function(data) {
      dato = data[0];
      $scope.user = data;
    })
    .error(function(data) {
      console.log('Error : ' + data);
    });

  $scope.editUser = function() {
    if ($scope.password != $scope.passwordConf) {
      alert("wrong password confirmation");
      vidage();
      return;
    }
    if ($scope.username)
      dato.username = $scope.username;
    if ($scope.password)
      dato.password = $scope.password;
    if ($scope.name)
      dato.name = $scope.name;
    if ($scope.lastname)
      dato.lastname = $scope.lastname;
    userService.edit(dato._id, dato)
      .success(function(data) {
        localStorage.setItem("user", dato.username);
        $scope.editing = true;
        vidage();
      })
      .error(function(data) {
        console.log("erreur" + data);
      })
  }
  
  function vidage() {
    $scope.name = "";
    $scope.lastname = "";
    $scope.username = "";
    $scope.password = "";
    $scope.passwordConf = "";
  }
}