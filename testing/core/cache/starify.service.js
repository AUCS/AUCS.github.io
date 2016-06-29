angular.
  module('core.starify').
  factory('Cache', ['reviews',
    function(reviews) {
      for (i1 = 0; i1 < reviews.length(); i1+=1) {
        reviews.[i].stars = [];
        for (i2 = 0; i2 < 5; i2+=1) {
          reviews[i].stars.push({
            full: reviews[i].rating >= i + 1,
            half: reviews[i].rating > i,
            empty: reviews[i].rating <= i
          });
        }
      }
    }
  ]);