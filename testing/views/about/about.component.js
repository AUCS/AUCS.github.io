'use strict';

// Register `about` component, along with its associated controller and template
angular.
  module('about').
  component('about', {
    templateUrl: 'views/about/about.template.html',
    controller: [
      function AboutController($scope, Cache) {
        
      }]
  });
