'use strict';

// Register `headnote` component, along with its associated controller and template
angular.
  module('headnote').
  component('headnote', {
    templateUrl: 'views/headnote/headnote.template.html',
    controller: [ '$scope', '$location', '$rootScope',
      function HeadnoteController($scope, $location, $rootScope) {
        function UpdateHeaderTemplate(event, next, current) {
          var home_string = "/home";
          if (next.substr(-home_string.length) === home_string) {
            $('header > div.landing').show();
            $('header > div.header').hide();
          } else {
            $('header > div.landing').hide();
            $('header > div.header').show();
          }
        }
        UpdateHeaderTemplate(null, $location.absUrl(), null)
        $rootScope.$on("$locationChangeStart", UpdateHeaderTemplate);
      }
    ]
  });
