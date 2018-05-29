'use strict';

/**
 * @ngdoc overview
 * @name cursoMdApp
 * @description
 * # cursoMdApp
 *
 * Main module of the application.
 */
angular
  .module('cursoMdApp', [
    'ngAnimate',
    'ngMaterial'
  ])
  .config(function ($mdIconProvider, $mdThemingProvider) {
    // Config for icons svg
    $mdIconProvider.icon('share', '../images/share.svg', 24);
    $mdIconProvider.icon('menu', '../images/menu.svg', 24);

    // Config of palette color
    $mdThemingProvider.theme('default')
      .primaryPalette('purple');
  });
