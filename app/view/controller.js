'use strict';

angular.module('cvApp.landing', ['ngDialog', 'cvLang'])
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/', {
			templateUrl: 'app/view/landing.html',
			controller: 'landingCtrl'
		});
	}])
	.controller('landingCtrl', ['$rootScope', '$scope', '$http', 'ngDialog', 'cvLang', function($rootScope, $scope, $http, ngDialog, cvLang) {

		$scope.LANG = cvLang.lang;
		$scope.LNG = cvLang.lng;
		$rootScope.$on('lang-is-loaded', function() {
			$scope.LANG = cvLang.lang;
			$scope.LNG = cvLang.lng;
		});

		$scope.changeLang = function() {
			cvLang.changeLng();
			$scope.LANG = cvLang.lang;
			$scope.LNG = cvLang.lng;
		};

		addOnWheel($('.nano-content')[0], function(e) {
			$('.nano-content').stop();
		});

		$('a.short-link').on('click', function(e) {
			e.preventDefault();
			var target = $(this).attr("href");
			if ($(target).length > 0) {
				$('.nano-content').stop().animate({
					scrollTop: $(target).position().top
				}, 500);
			}
		});

		// scroll animate fix
		function addOnWheel(elem, handler) {
			if (elem.addEventListener) {
				if ('onwheel' in document) {
					elem.addEventListener("wheel", handler);
				} else if ('onmousewheel' in document) {
					elem.addEventListener("mousewheel", handler);
				} else {
					elem.addEventListener("MozMousePixelScroll", handler);
				}
			} else {
				elem.attachEvent("onmousewheel", handler);
			}
		}

		$scope.fly = false;
		$rootScope.$on('scroll', function(event, data) {
			if (data.top > 200) {
				$scope.fly = true;
			} else {
				$scope.fly = false;
			}
			$scope.$digest();
		});

		$scope.modalOpen = function() {
			ngDialog.open({
				template: '/app/view/modal.html',
				showClose: false,
				controller: ['$scope', 'cvLang', function($scope, cvLang) {

					$scope.LANG = cvLang.lang;

					function validateEmail(email) {
						var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
						return re.test(email);
					}

					$scope.styles = {
						form: true,
						error_cat: false,
						success: false,
						error: false,
						disable: false,
						err: {
							name: false,
							mail: false,
							text: false
						}
					};
					$scope.data = {
						'entry.878354685': '',
						'entry.1171937833': '',
						'entry.246362975': ''
					};
					$scope.submit = function() {
						$scope.styles.err = {
							name: false,
							mail: false,
							text: false
						};
						var err = false;
						if ($scope.data['entry.878354685'].length < 2) {
							err = true;
							$scope.styles.err.name = true;
						}
						if (!validateEmail($scope.data['entry.1171937833'])) {
							err = true;
							$scope.styles.err.mail = true;
						}
						if ($scope.data['entry.246362975'].length < 2) {
							err = true;
							$scope.styles.err.text = true;
						}
						if (!err) {
							//https://docs.google.com/a/artik-man.ru/forms/d/1UgaZGeh-a-P5XicohpUS4M7NhKIA-saselG0timvnto/formResponse
							//http://docs.google.com/forms/d/1UgaZGeh-a-P5XicohpUS4M7NhKIA-saselG0timvnto/formResponse
							$.ajax({
								url: "https://docs.google.com/a/artik-man.ru/forms/d/1UgaZGeh-a-P5XicohpUS4M7NhKIA-saselG0timvnto/formResponse",
								type: "POST",
								dataType: "xml",
								data: $scope.data,
								beforeSend: function() { // перед отправкой
									$scope.styles.disable = true;
								},
								complete: function(e, jqXHR, textStatus) {
									if (e.status === 0 || e.status === 200) {
										$scope.styles.form = false;
										$scope.styles.error_cat = false;
										$scope.styles.success = true;
										$scope.styles.error = false;

										setTimeout(function() {
											$scope.styles.form = true;
											$scope.styles.error_cat = false;
											$scope.styles.success = false;
											$scope.styles.error = false;
											$scope.styles.disable = false;
											ngDialog.closeAll()
										}, 3000);
									}
									else {
										$scope.styles.form = false;
										$scope.styles.error_cat = true;
										$scope.styles.success = false;
										$scope.styles.error = true;
										setTimeout(function() {
											$scope.styles.form = true;
											$scope.styles.error_cat = false;
											$scope.styles.success = false;
											$scope.styles.error = false;
											$scope.styles.disable = false;
										}, 3000);
									}
									$scope.$apply()
								}
							});
						}
					};
				}]
			});
		};

		$scope.menuIsOpen = false;
		$scope.menuOpen = function() {
			$scope.menuIsOpen = true;
		};
		$scope.menuClose = function() {
			$scope.menuIsOpen = false;
		};

		$http.get('/skills.json').then(function(resp) {
			$scope.skills = resp.data;
			$scope.skills.sort(function(a, b) {
				return (b.percent - a.percent);
			});
		}, function(resp) {
			console.error(resp)
		});

		$http.get('/projects.json').then(function(resp) {
			$scope.portfolio = [];
			resp.data.forEach(function(item) {
				if (!item.hide) {
					item.link = (item.link.length < 5 ? item.short_link : item.link);
					$scope.portfolio.push(item);
				}
			});
		}, function(resp) {
			console.error(resp)
		});

	}]);