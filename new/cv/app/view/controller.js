'use strict';

angular.module('cvApp.landing', ['ngDialog'])
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/', {
			templateUrl: 'app/view/landing.html',
			controller: 'landingCtrl'
		});
	}])
	.controller('landingCtrl', ['$rootScope', '$scope', 'ngDialog', function($rootScope, $scope, ngDialog) {

		addOnWheel($('.nano-content')[0], function(e) {
			$('.nano-content').stop();
		});

		$('a.short-link').on('click', function(e) {
			e.preventDefault();
			var target = $(this).attr("href");
			if ($(target).length > 0) {
				$('.nano-content').stop().animate({
					scrollTop: $(target).offset().top - 70
				}, 1000);
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
				controller: ['$scope', '$http', function($scope, $http) {
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
					$scope.submit = function(i) {
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
									console.log(e, jqXHR, textStatus)
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

					console.log($scope)
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

		$scope.skills = [
			{
				image: "ajax.png",
				title: "AJAX",
				percent: 65
			}, {
				image: "angular.png",
				title: "AngularJS",
				percent: 50
			}, {
				image: "bitrix.png",
				title: "1C-Bitrix",
				percent: 20
			}, {
				image: "bootstrap.png",
				title: "Bootstrap",
				percent: 75
			}, {
				image: "css.png",
				title: "CSS",
				percent: 90
			}, {
				image: "git.png",
				title: "GIT",
				percent: 55
			}, {
				image: "html.png",
				title: "HTML",
				percent: 95
			}, {
				image: "jq.png",
				title: "jQuery",
				percent: 85
			}, {
				image: "js.png",
				title: "JavaScript",
				percent: 70
			}, {
				image: "less.png",
				title: "less",
				percent: 80
			}, {
				image: "mysql.png",
				title: "MySQL",
				percent: 60
			}, {
				image: "php.png",
				title: "PHP",
				percent: 40
			}
		].sort(function(a, b) {
			return (b.percent - a.percent);
		});

		$scope.portfolio = [
			{
				link: 'http://primepix.ru/portfolio/3-15/',
				short_link: 'http://3-15.ru/',
				image: 'm315.jpg',
				title: {
					ru: 'Интернет-магазин наручных часов «3–15»',
					en: 'Watches online shop «3–15»'
				}
			}, {
				link: 'http://primepix.ru/portfolio/webasto/',
				short_link: 'http://webasto29.ru/',
				image: 'webasto.jpg',
				title: {
					ru: 'WEBASTO — предпусковые обогреватели',
					en: 'WEBASTO'
				}
			}, {
				link: 'http://primepix.ru/portfolio/mgrabber/',
				short_link: 'http://pricereporter.ru/',
				image: 'pr.jpg',
				title: {
					ru: 'Прайсрепортер',
					en: 'Pricereporter'
				}
			}, {
				link: '',
				short_link: 'http://bklyncommons.com/',
				image: 'bklyn.jpg',
				title: {
					ru: 'BKLYN Commons',
					en: 'BKLYN Commons'
				}
			}, {
				link: '',
				short_link: 'http://portfolio.artik-man.ru/park/',
				image: 'park.jpg',
				title: {
					ru: 'Парк «Потешный двор»',
					en: 'Amusement Park'
				}
			}, {
				link: 'http://primepix.ru/portfolio/Verona-for-me/',
				short_link: 'http://verona-for.me/',
				image: 'verona.jpg',
				title: {
					ru: 'Итальянская мебель Verona',
					en: 'Verona'
				}
			}, {
				link: '',
				short_link: 'http://portfolio.artik-man.ru/seival/',
				image: 'seawhale.jpg',
				title: {
					ru: 'Сейвал',
					en: 'Seawhale'
				}
			}, {
				link: '',
				short_link: 'http://portfolio.artik-man.ru/creative/',
				image: 'creative.jpg',
				title: {
					ru: 'Салон красоты «Креатив»',
					en: 'Beauty Salon «Creative»'
				}
			}, {
				link: '',
				short_link: 'http://portfolio.artik-man.ru/promo/',
				image: 'promo.jpg',
				title: {
					ru: 'Promo',
					en: 'Promo'
				}
			}
		];
		$scope.portfolio.forEach(function(item) {
			if (item.link.length < 5) {
				item.link = item.short_link;
			}
		});

	}]);