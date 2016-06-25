'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
	module('navigation').
	component('navigation', {
		templateUrl: 'navigation/navigation.template.html',
		controller: ['$scope',
			function NavigationController($scope) {
				$scope.maybeworking = true;
			}
		]
	});
