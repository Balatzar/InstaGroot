function conversationService($http) {
  return {
    post: function(data) {
      return $http.post('/api/conversations', data);
    },
    get: function(data) {
      return $http.post('/api/conversations/user', data);
    }
  }
}
