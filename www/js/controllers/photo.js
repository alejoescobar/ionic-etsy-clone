'use strict';

app.controller('PhotoCtrl', function($scope, $cordovaCamera, $rootScope, $state, Camera) {
  $scope.takePhoto = function() {
    console.log('Take photo was clicked');
    // Camera Plugin

    var options = {
      quality: 75,
      destinationType: Camera.DestinationType.DATA_URL,
      sourceType: Camera.PictureSourceType.CAMERA,
      allowEdit: true,
      encodingType: Camera.EncodingType.JPEG,
      popoverOptions: CameraPopoverOptions,
      targetWidth: 500,
      targetHeight: 500,
      saveToPhotoAlbum: false
    };

    $cordovaCamera.getPicture(options).then(function(photo) {
      $rootScope.imgURI = "data:image/jpeg;base64," + photo;
      $state.go('tab.photo-detail');
    })
  }

  $scope.choosePhoto = function() {
    console.log('Will link up to photo library');
  }
});