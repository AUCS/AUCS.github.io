'use strict';

// Register `head` component, along with its associated controller and template
angular.
  module('head').
  component('head', {
    templateUrl: [ '$location',
      function HeadController($location) {
        if ($location.path() === "/home") {
          return 'views/head/head.template-landing.html';
        } else {
          return 'views/head/head.template-main.html';
        }
      }
    ]
  });
