'use strict';

// Register `home` component, along with its associated controller and template
angular.
  module('home').
  component('home', {
    templateUrl: 'views/home/home.template.html',
    controller: ['Home',
      function HomeController(Home) {
        this.phones = Phone.query();
        this.orderProp = 'age';
      }
    ]
  });
