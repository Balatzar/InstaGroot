// TODO SERVICE
function todoService($http) {
		return {
			get : function() {
				return $http.get('/todos');
			},
			update : function(id, data){
				return $http.put('/todos/' + id, data);
			},
			create : function(data) {
				return $http.post('/todos', data);
			},
			delete : function(id) {
				return $http.delete('/todos/' + id);
			}
		}
};
