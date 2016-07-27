'use strict';

// Register `home` component, along with its associated controller and template
angular.
  module('about').
  component('about', {
    templateUrl: 'views/about/about.template.html',
    controller: ['$scope', 'Cache',
      function AboutController($scope, Cache) {
        var ctrl = this;
        Cache.get({
          cache: 'latest-reviews'
        }, function(data) {
          ctrl.LatestReviews = data.reviews;
        });
      }]
  });
