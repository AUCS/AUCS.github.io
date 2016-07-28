'use strict';

// Register `headnote` component, along with its associated controller and template
angular.
  module('headnote').
  component('headnote', {
    templateUrl: 'views/headnote/headnote.template.html',
    controller: [ '$scope', '$location', '$rootScope',
      function HeadnoteController($scope, $location, $rootScope) {
				$scope.LoginLabel = $scope.templateUrl;
        // your controller initialization here ...
        $rootScope.$on("$locationChangeStart", function(event, next, current) {
          var home_string = "/home";
          if (next.substr(-home_string.length) === home_string) {
            $scope.LoginLabel = 'views/headnote/headnote.template-landing.html';
          } else {
            $scope.LoginLabel = 'views/headnote/headnote.template-main.html';
          }
        });
      }
    ]
  });
