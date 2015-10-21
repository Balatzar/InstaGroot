function postService($http) {
  return {
    post: function(data) {
      return $http.post('/api/posts', data);
    },
    getAll: function() {
      return $http.get('/api/posts');
    }
  }
} 