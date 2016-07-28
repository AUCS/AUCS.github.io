'use strict';

// Register `headnote` component, along with its associated controller and template
angular.
  module('headnote').
  component('headnote', {
    templateUrl: 'views/headnote/headnote.template.html',
    controller: [ '$scope', '$location', '$rootScope',
      function HeadnoteController($scope, $location, $rootScope) {
				$scope.Template = $scope.templateUrl;
        function UpdateHeaderTemplate(event, next, current) {
          var home_string = "/home";
          if (next.substr(-home_string.length) === home_string) {
            $scope.Template = 'views/headnote/headnote.template-landing.html';
          } else {
            $scope.Template = 'views/headnote/headnote.template-main.html';
          }
        }
        UpdateHeaderTemplate(null, $location.absUrl(), null)
        $rootScope.$on("$locationChangeStart", UpdateHeaderTemplate(event, next, current));
      }
    ]
  });
