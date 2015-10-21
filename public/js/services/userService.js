function userService($http) {
  return {
    post: function(data) {
      return $http.post('/api/users', data);
    },
    check: function(data) {
      return $http.post('/api/login', data);
    },
    getOne: function(user) {
      return $http.get('/api/users/' + user);
    },
    edit: function(user, data) {  
      return $http.put('/api/users/' + user, data);
    },
    get: function() {
      return $http.get('/api/users');
    },
    delete: function(id) {
      return $http.delete('/api/users/' + id);
    },
    logout: function($location) {
      localStorage.clear();
      $location.path('/');
    }
  }
} 