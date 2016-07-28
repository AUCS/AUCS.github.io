'use strict';

// Register `headnote` component, along with its associated controller and template
angular.
  module('headnote').
  component('headnote', {
    templateUrl: [ '$location',
      function HeadnoteTemplateInitialiser($location) {
        if ($location.path() === "/home") {
          return 'views/headnote/headnote.template-landing.html';
        } else {
          return 'views/headnote/headnote.template-main.html';
        }
      }
    ],
    controller: [ '$scope', '$location', '$rootScope',
      function HeadnoteController($scope, $location, $rootScope) {
        // your controller initialization here ...
        $rootScope.$on("$locationChangeStart", function(event, next, current) {
          var home_string = "/home";
          if (next.substr(-home_string.length) === home_string) {
            $scope.templateUrl = 'views/headnote/headnote.template-landing.html';
          } else {
            $scope.templateUrl = 'views/headnote/headnote.template-main.html';
          }
        });
      }
    ]
  });
