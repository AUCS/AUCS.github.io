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
  config(['ezfbProvider',
    function(ezfbProvider) {
      ezfbProvider.setInitParams({
        appId: '631831156964129',
        version: 'v2.6'
      })
    }
  ]);
