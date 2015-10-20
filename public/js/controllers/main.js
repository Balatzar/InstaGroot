function mainController($scope, $http) {
  var user = localStorage.getItem("user");
  $scope.user = user;
  
  $scope.jeclick = function() {
    console.log($scope.vm.picture);
  }
}