'use strict';

// Register `head` component, along with its associated controller and template
angular.
  module('head').
  component('head', {
    templateUrl: 'views/head/head.template.html',
    controller: [ '$filter',
      function HeadController($filter) {
          this.CurrentYear = $filter('date')(new Date(), 'yyyy');
      }
    ]
  });
