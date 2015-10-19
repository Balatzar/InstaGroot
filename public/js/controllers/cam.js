function camController($scope, $http) {
  $scope.title = "Caméra";
  
navigator.getUserMedia = ( navigator.getUserMedia ||
                       navigator.webkitGetUserMedia ||
                       navigator.mozGetUserMedia ||
                       navigator.msGetUserMedia);

if (navigator.getUserMedia) {
   navigator.getUserMedia (

      // constraints
      {
         video: true,
         audio: true
      },

      // successCallback
      function(localMediaStream) {
         var video = document.querySelector('video');
         video.src = window.URL.createObjectURL(localMediaStream);
         // Do something with the video here, e.g. video.play()
      },

      // errorCallback
      function(err) {
         console.log("The following error occured: " + err);
      }
   );
} else {
   console.log("getUserMedia not supported");
}
}