function convController($scope, conversationService, userService, $location, $routeParams) {
  if (!localStorage.getItem("user"))
    $location.path('/');

  $scope.logout = function() {
    userService.logout($location);
  }

  var user = localStorage.getItem("user");
  var userInUrl = $routeParams.conv;
  var dato = {};
  $scope.title = "Papotage avec " + userInUrl;

  dato.search = user;

  function loadMsg() {
  conversationService.get(dato)
    .success(function(data) {
      var messages = [];
      for (var i = 0; i < data.length; i++) {
        if (data[i].people[0] == user) {
          if (data[i].people[1] == userInUrl)
            messages.push(data[i].messages[0]);
        }
        else
          if (data[i].people[0] == userInUrl)
            messages.push(data[i].messages[0]);
      }
      console.log(messages);
      $scope.messages = messages;
    })
    .error(function(data) {
      console.warn(data);
    })
  }

  loadMsg();

  $scope.sendMsg = function() {
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
        loadMsg();
        $scope.text = "";
      })
      .error(function(data) {
        console.warn(data);
      })
  }

}
