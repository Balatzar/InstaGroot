function dmController($scope, userService, $location, $routeParams, conversationService) {
  if (!localStorage.getItem("user"))
    $location.path('/');

  $scope.logout = function() {
    userService.logout($location);
  }

  var user = localStorage.getItem("user");
  $scope.user = user;
  var userInUrl = $routeParams.username;
  $scope.papoto = userInUrl;
  var dato = {};

  $scope.startConv = function() {
    dato.message = {};
    dato.message.text = $scope.text;
    dato.message.author = user;
    var people = [];
    people.push(user);
    people.push(userInUrl);
    dato.authors = people;
    console.log(dato)
    conversationService.post(dato)
      .success(function(data) {
        $location.path('/edit');
      })
      .error(function(data) {
        console.log(data);
      })
  }

}
