// USER SERVICE
function userSerive($http) {
  return {
    create: function(data) {
      $http.post('/users', data);
    }
  }
}