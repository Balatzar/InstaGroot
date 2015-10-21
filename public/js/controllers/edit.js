function editController($scope, userService, $location) {
  if (!localStorage.getItem("user"))
    $location.path('/');
  
  var dato = {};
  var t = JSON.stringify({user: localStorage.getItem("user")});
  var headers = {headers: {params: t }}
  
  $scope.logout = function() {
    userService.logout($location);
  }

  userService.getOne(localStorage.getItem("user"))
    .success(function(data) {
      console.log(data);
      $scope.user = data;
    })
    .error(function(data) {
      console.log('Error : ' + data);
    });

  $scope.editUser = function() {
    dato.username = "balthazar";
    userService.edit(localStorage.getItem("user"), dato)
      .success(function(data) {
        console.log(data);
      })
      .error(function(data) {
        console.log("erreur" + data);
      })
  }
}