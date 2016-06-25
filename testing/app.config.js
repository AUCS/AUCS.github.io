'use strict';

angular.
  module('aucsApp').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.html5Mode(false);
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
        when('/cheeses', {
          template: '<cheeses></cheeses>'
        }).
        when('/cheeses/:cheeseId', {
          template: '<cheese-detail></cheese-detail>'
        }).
        when('/about', {
          template: '<about></about>'
        }).
        when('/events', {
          template: '<events></events>'
        }).
        otherwise('/home');
    }
  ]).
  config(['ezfbProvider',
    function(ezfbProvider) {
      ezfbProvider.setInitParams({
        appId: '631831156964129',
        version: 'v2.6'
      })
    }
  ]);
