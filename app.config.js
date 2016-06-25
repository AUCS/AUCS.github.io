'use strict';

angular.
  module('aucsApp').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/phones', {
          template: '<phone-list></phone-list>'
        }).
        when('/phones/:phoneId', {
          template: '<phone-detail></phone-detail>'
        }).
        when('/home', {
          template: '<home></home>'
        }).
        otherwise('/home');
    }
  ]).
  config(function($facebookProvider) {
    $facebookProvider.setAppId('testing');
    $facebookProvider.setPermissions("email");
  });
