function camController($scope, $http) {
  $scope.title = "Caméra";
  
  $scope.jeclick = function(){
    console.log($scope.vm.picture);
  }
}