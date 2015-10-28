function editController($scope, userService, postService, $location, conversationService) {
  if (!localStorage.getItem("user"))
    $location.path('/');

  var author = localStorage.getItem("user");
  var dato = {};
  $scope.tab = 1;
  $scope.okPassword = false;
  var t = JSON.stringify({user: localStorage.getItem("user")});
  var headers = {headers: {params: t }}
  $scope.editing = true;
  var tabs = document.querySelectorAll(".tab");
  console.log(tabs)

  $scope.logout = function() {
    userService.logout($location);
  }

  dato.author = author;

  postService.getAllOne(dato)
    .success(function(data){
      console.log(data)
      $scope.posts = data;
      $scope.profil = author;
    })
    .error(function(data) {
      console.log('error : ' + data);
    });

  // set the default amount of items being displayed
  $scope.limit = 5;
  var afterLoad = false;

  // loadMore function
  $scope.loadMore = function() {
    if(afterLoad === true)
      $scope.limit += 5;
    afterLoad = true;
  };

  $scope.changeTab = function(tab) {
    $scope.tab = tab;
    var tabs = document.querySelectorAll(".tab");
    for (var i = 0; i < tabs.length; i++) {
      tabs[i].classList.remove("active");
    }
    tabs[tab - 1].classList.add("active");
  }

  var user = localStorage.getItem("user");
  dato.search = user;
  conversationService.get(dato)
    .success(function(data) {
    console.info(data);
    var lastMsg = [];
    var friends = [];
    if (data.length) {
      lastMsg.push(data[0]);
      if (data[0].people[0] == user)
        friends.push(data[0].people[1]);
      else
        friends.push(data[0].people[0]);
    }
    for (var i = 1; i < data.length; i++) {
      if (data[i].people[0] == user) {
        if (friends.indexOf(data[i].people[1]) == -1) {
          friends.push(data[i].people[1]);
          lastMsg.push(data[i])
        }
      }
      else {
        if (friends.indexOf(data[i].people[0]) == -1) {
          friends.push(data[i].people[0]);
          lastMsg.push(data[i])
        }
      }
    }
    $scope.lastMsg = lastMsg;
    console.log(lastMsg)
    console.log(friends)
    })
    .error(function(data) {
      console.log(data);
    });

  $scope.change = function() {
    $scope.okPassword = true;
    $scope.askPass = "";
  }

  $scope.askPassword = function() {;
    console.log(dato);
    console.log($scope.askPass);
    if ($scope.askPass == dato.password) {
      $scope.okPassword = false;
      $scope.editing = false;
      userService.getOne(localStorage.getItem("user"))
        .success(function(data) {
          console.log(data);
        })
        .error(function(data) {
          console.log('Error : ' + data);
        });
    }
    else {
      alert("NOPE c'est pas le bon code");
      $scope.okPassword = true;
      $scope.askPass = "";
    }
  }

  userService.getOne(localStorage.getItem("user"))
    .success(function(data) {
      dato = data[0];
      $scope.user = data;
    })
    .error(function(data) {
      console.log('Error : ' + data);
    });

  $scope.editUser = function() {
    if ($scope.password != $scope.passwordConf) {
      alert("wrong password confirmation");
      vidage();
      return;
    }
    if ($scope.username) {
      dato.oldUsername = localStorage.getItem("user");
      dato.username = $scope.username;
      postService.updateAllOne(dato)
        .success(function(data) {
          console.log(data);
        })
        .error(function(data) {
          console.log(data);
        })
    }
    if ($scope.password)
      dato.password = $scope.password;
    if ($scope.name)
      dato.name = $scope.name;
    if ($scope.lastname)
      dato.lastname = $scope.lastname;
    userService.edit(dato._id, dato)
      .success(function(data) {
        localStorage.setItem("user", dato.username);
        $scope.editing = true;
        vidage();
      })
      .error(function(data) {
        console.log("erreur" + data);
      })
  }

  function vidage() {
    $scope.name = "";
    $scope.lastname = "";
    $scope.username = "";
    $scope.password = "";
    $scope.passwordConf = "";
  }
}
