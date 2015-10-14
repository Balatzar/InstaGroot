function mainController($scope, $http) {
  var user = localStorage.getItem("user");
  $scope.user = user;
}