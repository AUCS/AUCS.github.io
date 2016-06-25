'use strict';

// Register `navigation` component, along with its associated controller and template
angular.
	module('navigation').
	component('navigation', {
		templateUrl: 'views/navigation/navigation.template.html',
		controller: ['$scope',
			function NavigationController($scope) {
				$scope.NavHidden = true;
				this.ToggleNav = function() {
					$scope.NavHidden = !$scope.NavHidden;
				};
			}
		]
	});
