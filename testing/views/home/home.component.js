'use strict';

// Register `home` component, along with its associated controller and template
angular.
  module('home').
  component('home', {
    templateUrl: 'views/home/home.template.html',
    controller: ['$scope', 'Cache',
      function HomeController($scope, Cache) {
        var ctrl = this;
        Cache.get({
          cache: 'latest-reviews'
        }, function(data) {
          ctrl.LatestReviews = data.reviews;
          $('input.rating').rating();
        });
        $('input.rating').rating();
      }]
  });
