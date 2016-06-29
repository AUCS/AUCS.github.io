angular.
  module('core.starify').
  factory('Starify', [ function() {
    return function(reviews) {
      var convertToStars = function(review) {
        review.stars = [];
        for (j = 0; j < 5; j+=1) {
          review.stars.push({
            full: review.rating >= j + 1,
            half: review.rating > j && review.rating < j + 1,
            empty: review.rating <= j
          });
        }
      };
      if ($.isArray(reviews)) {
        for (i = 0; i < reviews.length; i+=1) {
          convertToStars(reviews[i]);          
        }        
      } else {
        convertToStars(reviews);
      }
      return reviews;
    }
  }]);