function profileController($scope, postService) {
  var user = localStorage.getItem("user");
  var dato  = {};
  dato.author = user;
  $scope.user = user;

  postService.getAllOne(dato)
  	.success(function(data){
  		$scope.posts = data;
  	})
  	.error(function(data) {
  		console.log('error : ' + data);
  	});
}