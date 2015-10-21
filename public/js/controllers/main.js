function mainController($scope, $http, userService, $location ) {
  if (!localStorage.getItem("user"))
    $location.path('/');
  
  var user = localStorage.getItem("user");
  var dato = {};
  $scope.user = user;
  
  $scope.logout = function() {
    userService.logout($location);
  }
  
  $scope.jeclick = function(){
    console.log($scope.vm.picture);
    dato.picture = $scope.vm.picture;
    dato.author = localStorage.getItem("user");
    $http.post('/api/posts', dato)
      .success(function(data) {
        console.log(data);
      })
      .error(function(data) {
        console.log('Error : ' + data);
      });
  }
}