function postController($scope, postService, userService, $location) {
  if (!localStorage.getItem("user"))
    $location.path('/');
  
  $scope.logout = function() {
    userService.logout($location);
  }
  
  var user = localStorage.getItem("user");
  var dato = {};
  $scope.user = user;
  
  $scope.jeclick = function(){
    dato.author = $scope.user;
    dato.picture = $scope.vm.picture;
    dato.title = $scope.$$childTail.title;
    getTags($scope.$$childTail.description);
    postService.post(dato)
      .success(function(data) {
        console.log(data);
        $scope.$$childTail.title = "";
        $scope.$$childTail.description = "";
        $location.path("/main");
      })
      .error(function(data) {
        console.log('Error : ' + data);
      });
  }
  
  function getTags(desc) {
    var description = "";
    var tags = [];
    var i = 0;
    var j = 0;
    var temp = "";
    var inTag = false;
    while (desc[i]) {
      if (!inTag && desc[i] != "#")
        description += desc[i];
      else if (desc[i] != ' ') {
        temp += desc[i]
        tags[j] = temp;
        inTag = true;
      }
      else {
        inTag = false;
        temp = "";
        ++j;
      }
      ++i;
    }
    console.log(description);
    console.log(tags);
    dato.description = description;
    dato.tags = tags;
  }
  
  //test canvas
  $scope.toCanvas = function() {
    var c = document.getElementById("picCanvas");
    var ctx = c.getContext("2d");
    var img = document.getElementById('vmPic');
    ctx.drawImage(img, 10, 10);
  }
  document.querySelector('img').onload = function() {
    context.drawImage(this, 0, 0, canvas.width, canvas.height);
  }
  
  //Function that adds the css class for the pic filters
  var idx = 0;
  var filters = ['grayscale', 'sepia', 'blur', 'brightness',
                'contrast', 'hue-rotate', 'hue-rotate2',
                'hue-rotate3', 'saturate', 'invert', ''];
  
  $scope.filter = function() {
    var el = document.querySelector('img');
    el.className = '';
    var effect = filters[idx++ % filters.length]; // loop through filters.
    if (effect) { el.classList.add(effect); }
  }
}