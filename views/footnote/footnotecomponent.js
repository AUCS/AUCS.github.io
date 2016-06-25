'use strict';

// Register `footer` component, along with its associated controller and template
angular.
  module('footnote').
  component('footnote', {
    templateUrl: 'views/footnote/footnote.template.html',
    controller: ['Footnote',
      function HomeController(Footer) {
          
      }
    ]
  });
