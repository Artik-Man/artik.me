angular.module('cvLang', [])
	.directive('cvLang', function($http, $rootScope) {
		return function() {

			$http.get('/lang.json').then(function(resp) {

				$rootScope.lng = (navigator.language || navigator.browserLanguage).substring(0, 2).toLowerCase();
				if ($rootScope.lng !== 'ru' && $rootScope.lng !== 'en') {
					$rootScope.lng = 'ru';
				}

				var update = function() {
					$rootScope.lang = {};
					angular.forEach(resp.data, function(value, key) {
						$rootScope.lang[key] = value[$rootScope.lng];
					});
					$rootScope.$broadcast('lang-is-changed');
				};

				update();

				$rootScope.$on('change-lang', function() {
					if ($rootScope.lng == 'ru') {
						$rootScope.lng = 'en'
					} else {
						$rootScope.lng = 'ru'
					}
					update();
				});
			}, function(resp) {
				console.error(resp)
			})

		};
	});

