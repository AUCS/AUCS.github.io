'use strict';

// Register `events` component, along with its associated controller and template
angular.
	module('events').
	component('events', {
		templateUrl: 'views/events/events.template.html',
		controller: [ 'ezfb', '$scope',
			function EventsController(ezfb, $scope) {
				$scope.Error = false;
				var date = new Date();
				var since = '?since=' + Math.round(date.getTime()/1000);
				//ezfb.api('/1549671362000387/events' + since, function(res)
				ezfb.api('/951125988341930/events' + since, function(res)
				{
					if (res.error != null) {
						$scope.Error = true;
					} else if (res.data.length > 0) {
						$scope.UpcomingEvents = res.data;
					}
				});
				date.setDate(date.getDate() - 1);
				var until = '?until=' + Math.round(date.getTime()/1000);
				//ezfb.api('/1549671362000387/events' + until, function(res)
				ezfb.api('/951125988341930/events' + until, function(res)
				{
					if (res.error != null) {
						$scope.Error = true;
					} else if (res.data.length > 0) {
						$scope.PastEvents = res.data;
					}
				});
			}]
	});
