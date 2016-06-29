angular.
  module('core.cache').
  factory('Cache', ['$resource',
    function($resource) {
      return $resource('../data/:cache.json', {}, {
        query: {
          method: 'GET',
          isArray: true
        }
      });
    }
  ]);