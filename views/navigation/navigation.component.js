'use strict';

// Register `navigation` component, along with its associated controller and template
angular.
	module('navigation').
	component('navigation', {
		templateUrl: 'navigation/navigation.template.html',
		controller: ['Navigation',
			function NavigationController(Navigation) {
				this.maybeworking = true;
			}
		]
	});
