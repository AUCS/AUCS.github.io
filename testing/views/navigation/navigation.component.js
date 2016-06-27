'use strict';

// Register `navigation` component, along with its associated controller and template
angular.
	module('navigation').
	component('navigation', {
		templateUrl: 'views/navigation/navigation.template.html',
		controller: [ 'ezfb', '$modal', '$scope', '$location',
			function NavigationController(ezfb, $modal, $scope, $location) {
				$scope.Hidden = true;
				$scope.ToggleNav = function() {
					$scope.Hidden = !$scope.Hidden;
				};
				$scope.LoginLabel = 'Login';
				var LoginStatus = null;
				var User = null;
				var modalInstance = $modal({
					scope: $scope,
					templateUrl: 'LoginModal.template.html',
					show: false
				});
				$scope.OpenAccount = function() {
					if (User === null || User.error != null) {
						modalInstance.$promise.then(modalInstance.show);
					} else {
						$location.path('/account')
					}
				};

				/**
				 * Subscribe to 'auth.statusChange' event to response to login/logout
				 */
				ezfb.Event.subscribe('auth.statusChange', function(statusRes) {
					LoginStatus = statusRes;
					updateMe();
				});

				$scope.Login = function () {
					/**
					 * Calling FB.login with required permissions specified
					 * https://developers.facebook.com/docs/reference/javascript/FB.login/v2.6
					 */
    				ezfb.login(null, {scope: ''})
					.then(function(res) {
						if (res.authResponse != null) {
							modalInstance.hide();
							$location.path('/account');
						} else {
							$scope.LoginError = "Something went wrong! Try again.";
						}
					});
				};
  
				/**
				 * Update api('/me') result
				 */
				function updateMe () {
					ezfb.getLoginStatus()
					.then(function (res) {
						// res: FB.getLoginStatus response
						// https://developers.facebook.com/docs/reference/javascript/FB.getLoginStatus
						return ezfb.api('/me');
					})
					.then(function (me) {
						// me: FB.api('/me') response
						// https://developers.facebook.com/docs/javascript/reference/FB.api
						User = me;
						if (User === null || User.error != null) {
							$scope.LoginLabel = 'Login';
						} else {
							$scope.LoginLabel = User.name;
						}
					});
				}
  
				/**
				 * Update loginStatus result
				 */
				function updateLoginStatus () {
					return ezfb.getLoginStatus()
					.then(function (res) {
						// res: FB.getLoginStatus response
						// https://developers.facebook.com/docs/reference/javascript/FB.getLoginStatus
						LoginStatus = res;
					});
				}
			}
		]
	});