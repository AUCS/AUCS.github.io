'use strict';

// Register `footer` component, along with its associated controller and template
angular.
  module('footer').
  component('footer', {
    templateUrl: 'views/footer/footer.template.html',
    controller: ['Footer',
      function HomeController(Footer) {
          
      }
    ]
  });
