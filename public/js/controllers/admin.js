function adminController($scope, $http) {
  // set the default amount of items being displayed
  $scope.limit = 6;

  // loadMore function
  $scope.loadMore = function() {
  $scope.limit += 3;
  };

  $http.get('/api/users')
    .success(function(data) {
    $scope.users = data;
  })
    .error(function(data) {
    console.log('Error : ' + data);
  });

  $scope.deleteUser = function(id) {
    console.log(id);
    $http.delete('/api/users/' + id)
      .success(function(data) {
      $scope.users = data;
      console.log(data);
    })
      .error(function(data) {
      console.log('Error : ' + data);
    });
    $http.get('/api/users')
      .success(function(data) {
      $scope.users = data;
    })
      .error(function(data) {
      console.log('Error : ' + data);
    });
  };
}