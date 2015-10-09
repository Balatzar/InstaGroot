// SIGNUP CONTROLLER
function signupController($scope, $http, userService) {

	function load(){
		userService.get().then(function(res){
			$scope.users = res.data;
		});
	}
  
  $scope.signup = function() {
    if (!$scope.username || $scope.username === "") { return }
    if (!$scope.password || $scope.password === "") { return }
    var data = {};
    data.username = $scope.username;
    data.name = $scope.name;
    data.firstname = $scope.firstname;
    data.password = $scope.password;
    data.age = $scope.age;
    
    userService.create(data).then(function(res){
          load();
      });
    
    $scope.username = "";
    $scope.name = "";
    $scope.firstname = "";
    $scope.password = "";
    $scope.age = "";
  }
}