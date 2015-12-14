'use strict';

app.controller('PhotoDetailCtrl', function($scope, Products, $rootScope) {

  $scope.imgURI = $rootScope.imgURI;

  $scope.button = function(product) {
    // console.log('Button was clicked!!!', product, $scope.image);
    Products.saveProduct(product, $scope.imageURI);
  }

});