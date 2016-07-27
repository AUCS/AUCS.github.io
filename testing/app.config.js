'use strict';

angular.
  module('aucsApp').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.html5Mode(false);
      $locationProvider.hashPrefix('!');

      $routeProvider.
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
        when('/account', {
          template: '<account></account>'
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
