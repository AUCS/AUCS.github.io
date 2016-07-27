'use strict';

// Register `core` component, along with its associated controller and template
angular.
  module('core').
  component('core', {
    controller: [
      function CoreController($scope, Cache) {
        var x = 6;
      }]
  });
