// USER SERVICE
function userService($http) {
  return {
    create: function(data) {
      $http.post('/users', data);
    }
  }
}