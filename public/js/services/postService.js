function postService($http) {
  return {
    post: function(data) {
      return $http.post('/api/posts', data);
    },
    getAll: function() {
      return $http.get('/api/posts');
    },
    getOne: function(id) {
      return $http.get('/api/posts/' + id);
    },
    getAllOne: function(data) {
      return $http.get('/api/posts', data);
    }
  }
} 