'use strict';

// Register `navigation` component, along with its associated controller and template
angular.
	module('navigation').
	component('navigation', {
		templateUrl: 'views/navigation/navigation.template.html',
		controller: [
			function NavigationController() {
				this.Visible = false;
				this.ToggleNav = function() {
					this.Visible = !this.Visible;
				};
			}
		]
	});
