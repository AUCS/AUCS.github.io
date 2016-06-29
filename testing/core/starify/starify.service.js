angular.
  module('core.starify').
  factory('Starify', [ function() {
    return function(reviews) {
      if ($.isArray(reviews)) {
        for (i = 0; i < reviews.length; i+=1) {
          reviews[i].stars = [];
          for (j = 0; j < 5; j+=1) {
            reviews[i].stars.push({
              full: reviews[i].rating >= j + 1,
              half: reviews[i].rating > j,
              empty: reviews[i].rating <= j
            });
          }
        }
      } else {
        for (j = 0; j < 5; j+=1) {
          reviews.stars.push({
            full: reviews.rating >= j + 1,
            half: reviews.rating > j,
            empty: reviews.rating <= j
          });
        }
      }
      return reviews;
    }
  }]);