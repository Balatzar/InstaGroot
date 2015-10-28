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
      return $http.post('/api/posts/all', data);
    },
    updateAllOne: function(data) {
      return $http.put('/api/posts/all', data);
    },
    search: function(data) {
      return $http.post('/api/posts/search', data);
    },
    putLike: function(id) {
      return $http.put('/api/posts/like', id);
    }
  }
} 