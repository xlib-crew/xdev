'use strict';

angular.module('xdevApp')
  .controller('NavCtrl', function ($scope, $location) {
    $scope.showNav = function(){
        if($location.path() == '/'){
            return false;
        }
        return true;
    }
  });
