function adminController($scope, userService) {
  // set the default amount of items being displayed
  $scope.limit = 6;

  // loadMore function
  $scope.loadMore = function() {
    $scope.limit += 3;
  };

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