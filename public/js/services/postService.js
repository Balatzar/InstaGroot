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
    search: function(data) {
      return $http.post('api/posts/search', data);
    }
  }
} 