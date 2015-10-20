function adminController($scope, userService) {

  userService.get()
    .success(function(data) {
    $scope.users = data;
  })
    .error(function(data) {
    console.log('error getuser' + error)
  });

  $scope.deleteUser = function(id) {
    userService.delete(id)
      .success(function(data) {
      $scope.users = data;
      console.log(data);
    })
      .error(function(data) {
      console.log('Error : ' + data);
    });
    userService.get()
    .success(function(data) {
    $scope.users = data;
  })
    .error(function(data) {
    console.log('error getuser' + error)
  });
  };
}