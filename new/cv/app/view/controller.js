'use strict';

angular.module('cvApp.landing', ['ngDialog'])
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/', {
			templateUrl: 'app/view/landing.html',
			controller: 'landingCtrl'
		});
	}])
	.controller('landingCtrl', ['$rootScope', '$scope', 'ngDialog', function($rootScope, $scope, ngDialog) {
		$scope.modalOpen = function() {
			ngDialog.open({
				template: '/app/view/modal.html',
				showClose: false
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
				percent: 45
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
				percent: 80
			}, {
				image: "js.png",
				title: "JavaScript",
				percent: 70
			}, {
				image: "less.png",
				title: "less",
				percent: 75
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