'use strict';

// Register `events` component, along with its associated controller and template
angular.
	module('events').
	component('events', {
		templateUrl: 'views/events/events.template.html',
		controller: [ 'ezfb', '$scope',
			function EventsController(ezfb, $scope) {
				ezfb.api('/1549671362000387', function(res)
				{
					var x = 1;
				});
				ezfb.api('/1549671362000387/events', function(res)
				{
					var x = 3;
				});
				$scope.UpcomingEvents = {};
				$scope.PastEvents = {};
			}]
	});
