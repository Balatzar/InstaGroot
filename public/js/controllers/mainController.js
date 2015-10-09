// MAIN CONTROLLER
function mainController($scope, $http, todoService) {
	$scope.title = "Todo List";

	function load(){
		todoService.get().then(function(res){
			$scope.todos = res.data;
		});
	}

	$scope.add = function(){
      if (!$scope.message || $scope.message === "") { return }
      var data = {};
      data.message = $scope.message;

      todoService.create(data).then(function(res){
          load();
      });
      $scope.message = "";
	}
    
    $scope.rm = function(todo) {
      todoService.delete(todo._id).then(function(res) {
        load();
      });
    }


	load();
}
