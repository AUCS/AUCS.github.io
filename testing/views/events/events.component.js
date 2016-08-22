'use strict';

// Register `events` component, along with its associated controller and template
angular.
	module('events').
	component('events', {
		templateUrl: 'views/events/events.template.html',
		controller: [ 'ezfb', '$scope', '$filter',
			function EventsController(ezfb, $scope, $filter) {
				var date = new Date();
				var since = '?since=' + $filter('date')(date, 'yyyy-mm-dd');
				ezfb.api('/1549671362000387/events' + since, function(res)
				{
					if (res.error != null) {
						$scope.Error = true;
					} else {
						$scope.UpcomingEvents = res;
					}
				});
				date.setDate(date.getDate() - 1);
				var until = '?until=' + $filter('date')(date, 'yyyy-mm-dd');
				ezfb.api('/1549671362000387/events' + until, function(res)
				{
					if (res.error != null) {
						$scope.Error = true;
					} else {
						$scope.PastEvents = res;
					}
				});
			}]
	});
