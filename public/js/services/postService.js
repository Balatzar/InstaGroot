function postService($http) {
  return {
    post: function(data) {
      return $http.post('/api/posts', data);
    }
  }
} 