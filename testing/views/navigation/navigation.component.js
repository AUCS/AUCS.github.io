'use strict';

// Register `navigation` component, along with its associated controller and template
angular.
	module('navigation').
	component('navigation', {
		templateUrl: 'views/navigation/navigation.template.html',
		controller: [ 'ezfb',
			function NavigationController(ezfb) {
				this.Hidden = true;
				this.ToggleNav = function() {
					this.Hidden = !this.Hidden;
				};
				this.OpenLogin = function() {
					var modalInstance = $uibModal.open({
						templateUrl: 'views/navigation/login.template.html',
						controller: [							
							function LoginController() {
								updateMe();

								updateLoginStatus().then(updateApiCall);
							}
						]
					})
				};

				/**
				 * Subscribe to 'auth.statusChange' event to response to login/logout
				 */
				ezfb.Event.subscribe('auth.statusChange', function (statusRes) {
					this.loginStatus = statusRes;

					updateMe();
					updateApiCall();
				});

				this.Login = function () {
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

				this.Logout = function () {
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
				 * For generating better looking JSON results
				 */
				var autoToJSON = ['loginStatus', 'apiRes']; 
				angular.forEach(autoToJSON, function (varName) {
					this.$watch(varName, function (val) {
					this[varName + 'JSON'] = JSON.stringify(val, null, 2);
					}, true);
				});
  
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
					this.me = me;
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
						this.loginStatus = res;
					});
				}

				/**
				 * Update demostration api calls result
				 */
				function updateApiCall () {
					return $q.all([
						ezfb.api('/me'),
						ezfb.api('/me/likes')
					])
					.then(function (resList) {
						// Runs after both api calls are done
						// resList[0]: FB.api('/me') response
						// resList[1]: FB.api('/me/likes') response
						this.apiRes = resList;
					});

				}
			}
		]
	});
