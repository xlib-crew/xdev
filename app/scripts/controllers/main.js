'use strict';

angular.module('xdevApp')
  .controller('MainCtrl', function ($scope, $localStorage, templogin, $location) {
    $scope.login = function(_username, _password){
        if(templogin.login(_username,_password)){
            console.log('hei')
           $location.path('/home');
        }
        else {
            console.log('Feil brukernavn/pass')
        }
    }
  });