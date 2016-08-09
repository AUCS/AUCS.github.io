'use strict';

angular.
  module('aucsApp').
  config(['$stateProvider', '$urlRouterProvider',
    function config($stateProvider, $urlRouterProvider) {
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/Home");
    // Now set up the states
    $stateProvider
      .state('Home', {
        url: "/Home",
        template: '<home></home>'
      })
      .state('cheeses', {
        url: "/cheeses",
        template: '<cheeses></cheeses>'
      })
      .state('cheeseId', {
        url: "/cheeses/:cheeseId",
        template: '<cheese-detail></cheese-detail>'
      })
      .state('about', {
        url: "/about",
        template: '<about></about>'
      })
      .state('events', {
        url: "/events",
        template: '<events></events>'
      })
      .state('account', {
        url: "/account",
        template: '<account></account>'
      });
    }
  ]).

  
  config(['ezfbProvider',
    function(ezfbProvider) {
      ezfbProvider.setInitParams({
        appId: '631831156964129',
        version: 'v2.7'
      })
    }
  ]);
