function camController($scope, $http) {
  $scope.title = "Caméra";
  var video = document.querySelector('video');
  
  // selectionner le bon user media en fonction du navigateur
  navigator.getUserMedia = ( navigator.getUserMedia ||
                             navigator.webkitGetUserMedia ||
                             navigator.mozGetUserMedia ||
                             navigator.msGetUserMedia);
  
  
  // si on a trouvé un user media
  if (navigator.getUserMedia) {
    //on appelle la fonction avec trois paramètres
    navigator.getUserMedia(
      // un objet avec les paramètres media
      {
        video: true,
        audio: false
      },
      // une fonction en cas de réussite de la récupération du media
      function success(localMediaStream) {
        // ajout de l'attribut src à notre objet video qui permet de streamer depuis la cam
        video.src = window.URL.createObjectURL(localMediaStream);
      },
      // une fonction en cas d'erreur
      function fail(err) {
        console.log("Erreur dans la récupération du média storage : " + err);
      }
    );
  // si on ne trouve pas de user media
  } else {
    alert("Vous ne supportez pas la vidéo n stuff.")
  }
}
