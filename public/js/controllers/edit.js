function editController($scope, $http) {
  var user = {};
  var t = JSON.stringify({user: localStorage.getItem("user")});
  var headers = {headers: {params: t }}
  
  $http.get('/api/users', headers)
    .success(function(data) {
      $scope.user = data;
    })
    .error(function(data) {
      console.log('Error : ' + data);
    });
}