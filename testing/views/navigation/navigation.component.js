'use strict';

// Register `navigation` component, along with its associated controller and template
angular.
	module('navigation').
	component('navigation', {
		templateUrl: 'views/navigation/navigation.template.html',
		controller: [ 'ezfb', '$uibModal',
			function NavigationController(ezfb, $uibModal) {
				this.Hidden = true;
				this.ToggleNav = function() {
					this.Hidden = !this.Hidden;
				};
				this.LoginLabel = 'Login';
				var LoginStatus = null;
				var User = null;
				this.OpenAccount = function() {
					if (LoginStatus === null) {
						var modalInstance = $uibModal.open({
							templateUrl: 'LoginModal.template.html',
							controller: [
								function LoginController() {
									this.Login = Login();
									this.Cancel = function() {
										modalInstance.dismiss('cancel');
									};
								}
							]
						});
					} else {
						$location.path('/account')
					}
				};

				/**
				 * Subscribe to 'auth.statusChange' event to response to login/logout
				 */
				ezfb.Event.subscribe('auth.statusChange', 'this', function(statusRes, parent) {
					LoginStatus = statusRes;
					updateMe();
					parent.LoginLabel = User.name;
				});

				var Login = function () {
					/**
					 * Calling FB.login with required permissions specified
					 * https://developers.facebook.com/docs/reference/javascript/FB.login/v2.0
					 */
					ezfb.login(null, {scope: 'email'});

					/**
					 * In the case you need to use the callback
					 *
					 * ezfb.login(function (res) {
					 *   // Executes 1
					 * }, {scope: 'email,user_likes'})
					 * .then(function (res) {
					 *   // Executes 2
					 * })
					 *
					 * Note that the `res` result is shared.
					 * Changing the `res` in 1 will also change the one in 2
					 */
				};

				var Logout = function () {
					/**
					 * Calling FB.logout
					 * https://developers.facebook.com/docs/reference/javascript/FB.logout
					 */
					ezfb.logout();

					/**
					 * In the case you need to use the callback
					 *
					 * ezfb.logout(function (res) {
					 *   // Executes 1
					 * })
					 * .then(function (res) {
					 *   // Executes 2
					 * })
					 */
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
