'use strict';

// Register `head` component, along with its associated controller and template
angular.
  module('head').
  component('head', {
    templateUrl: [ '$location',
      function HeadTemplateInitialiser($location) {
        if ($location.path() === "/home") {
          return 'views/head/head.template-landing.html';
        } else {
          return 'views/head/head.template-main.html';
        }
      }
    ],
    controller: [ '$scope', '$location', '$rootScope',
      function HeadController($scope, $location, $rootScope) {
        // your controller initialization here ...
        $rootScope.$on("$locationChangeStart", function(event, next, current) {
          if (next.path() === "/home") {
            $scope.templateUrl = 'views/head/head.template-landing.html';
          } else {
            $scope.templateUrl = 'views/head/head.template-main.html';
          }
          $log.info("location changing to:" + next); 
        });
      }
    ]
  });
