function userService($http) {
  return {
    post: function(data) {
      return $http.post('/api/users', data);
    }
  }
}