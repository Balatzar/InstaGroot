function searchController($scope, postService, $location) {
  $scope.user = localStorage.getItem("user");
  var url = self.location.href;
  var search = ""
  var i = 0;
  while (url[i++] != "#");
  while (url[i++] != "#");
  i -= 1;
  while (url[i++])
    search += url[i - 1];
  $scope.title = search;
  var dato = {};
  dato.search = search;
  postService.search(dato).then(
  function(res) {
    $scope.posts = res.data;
  }), function(res) {
    console.log("erreur" + res);
  }
  
  // set the default amount of items being displayed
  var afterLoad = false;
  $scope.limit = 5;

  // loadMore function
  $scope.loadMore = function() {
    if (afterLoad === true)
      $scope.limit += 5;
    afterLoad = true;
  };
  
  $scope.goTo = function(id) {
    $location.path('/post/' + id);
  }
}