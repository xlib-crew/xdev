'use strict';

angular.module('xdevApp')
  .factory('templogin', function () {
    // Service logic
    // ...

    var userTable = {
        1 : {username: 'Mathias', password: 'hawaii'},
        2 : {username: 'Erlend', password: '4321'}
    }
    return {
      login: function (_username, _password) {
          var key;
          for(key in userTable){
              if(userTable[key].username == _username && userTable[key].password == _password){
                  return true;
              }
          }
          return false;
      }
    };
  });
