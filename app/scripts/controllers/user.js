'use strict';

/**
 * @ngdoc function
 * @name cursoMdApp.controller:UserCtrl
 * @description
 * # UserCtrl
 * Controller of the cursoMdApp
 */
angular.module('cursoMdApp')
  .controller('UserCtrl', UserCtrl);

function UserCtrl(UserService, $mdSidenav, $mdBottomSheet) {
  var self = this;
  self.selected = null;
  self.users = [];
  self.selectUser = selectUser;
  self.toggleList = toggleList;
  self.share = share;

  // Load all users
  UserService
    .loadAll()
    .then(function(users) {
      self.users = [].concat(users);
      self.selected = users[0];
    });

  // Internal methods

  function selectUser(user) {
    self.selected = angular.isNumber(user) ? self.users[user] : user;
    toggleList();
  }

  function share(selectedUser) {
    $mdBottomSheet.show({
      controller: UserSheetCotroller,
      controllerAs: 'vm',
      templateUrl: 'views/bottomsheet.html',
      parent: angular.element(document.querySelector('#content'))
    });

    function UserSheetCotroller() {
      this.user = selectedUser;
      this.items = [
        { name: 'Phone', icon: 'phone', iconUrl: 'images/phone.svg' },
        { name: 'Twitter', icon: 'twitter', iconUrl: 'images/twitter.svg' },
        { name: 'Goolgle+', icon: 'google-plus', iconUrl: 'images/google-plus.svg' },
        { name: 'Hangout', icon: 'hangouts', iconUrl: 'images/hangouts.svg' }
      ];

      this.performAction = function(action) {
        $mdBottomSheet.hide();
      }
    }
  }

  function toggleList() {
    $mdSidenav('left').toggle();
  }
}
