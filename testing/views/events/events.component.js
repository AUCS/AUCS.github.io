'use strict';

// Register `events` component, along with its associated controller and template
angular.
	module('events').
	component('events', {
		templateUrl: 'views/events/events.template.html',
		controller: [ 'ezfb', '$scope',
			function EventsController(ezfb, $scope) {
				var something = ezfb.api('/1549671362000387');
				var somethingelse = ezfb.api('/1549671362000387/events');
				$scope.UpcomingEvents = {};
				$scope.PastEvents = {};
			}]
	});
