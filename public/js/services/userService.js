function userService($http) {
  return {
    post: function(data) {
      return $http.post('/api/users', data);
    },
    check: function(data) {
      return $http.post('/api/login', data);
    },
    getOne: function(headers) {
      return $http.get('/api/users', headers);
    },
    edit: function(headers, data) {
      return $http.put('/api/users/:id', headers, data);
    },
    get: function() {
      return $http.get('/api/users');
    },
    delete: function(id) {
      return $http.delete('/api/users/' + id);
    }
  }
}