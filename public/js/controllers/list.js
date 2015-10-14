// public/js/controllers/list.js

function listController($scope, $http, $routeParams) {
  title = $routeParams.list
  $scope.title = title;
  var dato = {};
  dato.list = title;
  var t = JSON.stringify({list: title});
  var headers = {headers: {params: t }}
  
  //when landing on the page get all the todos and show them
    $http.get('/api/todos', headers)
      .success(function(data) {
        $scope.todos = data;
        console.log(data);
      })
      .error(function(data) {
        console.log('Error: ' + data);
      });

    // when submitting the add form send the text to the node ap
    $scope.createTodo = function() {
      if (!$scope.text || $scope.text === "") { return }
      dato.text = $scope.text;
      $http.post('/api/todos', dato)
        .success(function(data) {
          $scope.text = "";
          $scope.todos = data;
          console.log(data);
        })
        .error(function(data) {
          console.log('Error : ' + data);
        });
    };

    //delete a todo after checking it
    $scope.deleteTodo = function(id) {
      $http.delete('/api/todos/' + id, dato)
        .success(function(data) {
          $scope.todos = data;
          console.log(data);
        })
        .error(function(data) {
          console.log('Error : ' + data);
        });
      $http.get('/api/todos', headers)
      .success(function(data) {
        $scope.todos = data;
        console.log(data);
      })
      .error(function(data) {
        console.log('Error: ' + data);
      });
    };
}