'use strict';

angular.
  module('aucsApp').
  config(['$stateProvider', '$urlRouterProvider',
    function config($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
    // Now set up the states
    $stateProvider
      .state('home', {
        url: '/home',
        views: {
          'head': { templateUrl: 'views/header/landing.template.html' },
          'body': { template: '<home></home>' }
        }        
      })
      .state('cheeses', {
        url: '/cheeses',
        views: {
          'head': { templateUrl: 'views/header/header.template.html' },
          'body': { template: '<cheeses></cheeses>' }
        }
      })
      .state('cheeseId', {
        url: '/cheeses/:cheeseId',
        views: {
          'head': { templateUrl: 'views/header/header.template.html' },
          'body': { template: '<cheese-detail></cheese-detail>' }
        }
      })
      .state('about', {
        url: '/about',
        views: {
          'head': { templateUrl: 'views/header/header.template.html' },
          'body': { template: '<about></about>' }
        }
      })
      .state('events', {
        url: '/events',
        views: {
          'head': { templateUrl: 'views/header/header.template.html' },
          'body': { template: '<events></events>' }
        }
      })
      .state('eventId', {
        url: '/events/:eventId',
        views: {
          'head': { templateUrl: 'views/header/header.template.html' },
          'body': { template: '<event-detail></event-detail>' }
        }
      })
      .state('account', {
        url: '/account',
        views: {
          'head': { templateUrl: 'views/header/header.template.html' },
          'body': { template: '<account></account>' }
        }
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
