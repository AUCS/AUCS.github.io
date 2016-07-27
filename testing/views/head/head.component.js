'use strict';

// Register `head` component, along with its associated controller and template
angular.
  module('head').
  component('head', {
    templateUrl: 'views/head/head.template-main.html',
    controller: [ '$location',
      function HeadController($location) {
          
      }
    ]
  });
