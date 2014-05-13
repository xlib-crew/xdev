'use strict';

angular.module('xdevApp')
  .controller('FagCtrl', function ($scope, templogin) {
    $scope.todayItems = {
        1: 'Matte: 08:15',
        2: 'Norsk: 10:15',
        3: 'Naturfag: 13:15',
        4: 'Kjemi: 14:15'
    }
    $scope.monday = {

    }
    templogin.login();
  });
