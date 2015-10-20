function editController($scope, userService) {
  var dato = {};
  var t = JSON.stringify({user: localStorage.getItem("user")});
  var headers = {headers: {params: t }}

  userService.getOne(headers)
    .success(function(data) {
      $scope.user = data;
    })
    .error(function(data) {
      console.log('Error : ' + data);
    });

  $scope.editUser = function() {
    dato.username = "balthazar";
    userService.edit(headers, dato)
      .success(function(data) {
        console.log(data)
      })
      .error(function(data) {
        console.log("erreur" + data);
      })
  }
}