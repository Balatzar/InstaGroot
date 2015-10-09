// USER SERVICE
function userService($http) {
  return {
    create: function(data) {
      return $http.post('/users', data);
    },
    get : function() {
        return $http.get('/users');
    },
  }
}