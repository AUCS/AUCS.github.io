'use strict';

// Register `core` component, along with its associated controller and template
angular.
  module('core').
  component('core', {
    controller: ['$scope',
      function NavigationSmallCollapse($scope) {
        $scope.isCollapsed = false;
      }
    ]
  });
