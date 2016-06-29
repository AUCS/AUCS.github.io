'use strict';

// Register `home` component, along with its associated controller and template
angular.
  module('home').
  component('home', {
    templateUrl: 'views/home/home.template.html',
    controller: ['$scope', 'Cache', 'Starify',
      function HomeController($scope, Cache, Starify) {
        var ctrl = this;
        Cache.get({
          cache: 'latest-reviews'
        }, function(data) {
          ctrl.LatestReviews = Starify(data.reviews);
        });
      }]
  });
