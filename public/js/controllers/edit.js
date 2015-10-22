function editController($scope, userService, $location) {
  if (!localStorage.getItem("user"))
    $location.path('/');
  
  var dato = {};
  var t = JSON.stringify({user: localStorage.getItem("user")});
  var headers = {headers: {params: t }}
  $scope.editing = true;
  
  $scope.logout = function() {
    userService.logout($location);
  }
  
  $scope.change = function() {
    $scope.editing = false;
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
        $scope.username = "";
        $scope.password = "";
        $scope.name = "";
        $scope.lastname = "";
      })
      .error(function(data) {
        console.log("erreur" + data);
      })
  }
}