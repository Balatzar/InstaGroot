// public/js/controllers/main.js

function mainController($scope, $http) {
  
  $http.get('/api/lists')
    .success(function(data) {
      $scope.lists = data;
      console.log(data);
    })
    .error(function(data) {
      console.log('Error: ' + data);
    });
  
  $scope.createList = function() {
    if (!$scope.text || $scope.text === "") { return }
    var dato = {};
    dato.text = $scope.text;
    $http.post('/api/lists', dato)
      .success(function(data) {
        $scope.text = "";
        $scope.lists = data;
        console.log(data);
      })
      .error(function(data) {
        console.log('Error : ' + data);
      });
  };
  
  $scope.deleteList = function(id) {
    $http.delete('/api/lists/' + id)
      .success(function(data) {
        console.log(data);
      })
      .error(function(data) {
        console.log('Error : ' + data);
      });
    $http.get('/api/lists')
    .success(function(data) {
      $scope.lists = data;
      console.log(data);
    })
    .error(function(data) {
      console.log('Error: ' + data);
    });
  }
}