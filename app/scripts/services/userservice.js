'use strict';

/**
 * @ngdoc service
 * @name cursoMdApp.UserService
 * @description
 * # UserService
 * Service in the cursoMdApp.
 * Service for loader users
 */
angular.module('cursoMdApp')
  .service('UserService', UserService);

function UserService($q) {
  var users = [
    {
      name: 'Thomas burleson',
      avatar: 'man',
      content: 'I am Hipster, and I like cheese burguer with potato. bla blabla ...'
    },
    {
      name: 'Aron frost',
      avatar: 'boy',
      content: 'Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis.'
    },
    {
      name: 'Thomas burleson',
      avatar: 'man',
      content: 'I am Hipster, and I like cheese burguer with potato. bla blabla ...'
    },
    {
      name: 'Aron frost',
      avatar: 'boy',
      content: 'Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis.'
    }
  ];

  return {
    loadAll: function() {
      var defer = $q.defer();
      defer.resolve(users);
      return defer.promise;
    }
  }
}
