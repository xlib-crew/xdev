'use strict';

angular.module('xdevApp')
  .controller('MainCtrl', function ($scope, $localStorage) {
    $scope.users = function(_username, _password){
        $localStorage.$default({users: {username: _username, password: _password}})
    };
    $scope.users('Erlend', '4536234')
    console.log($localStorage)
  });
