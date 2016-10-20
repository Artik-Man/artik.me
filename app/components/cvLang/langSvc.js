angular.module('cvLang', [])
	.service('cvLang', function($http, $rootScope) {
		var self = this;
		var lng = 'ru';
		var json = {};
		self.lang = {};
		self.changeLng = function() {
			if (lng == 'ru') {
				lng = 'en'
			} else {
				lng = 'ru'
			}
			self.update();
		};
		self.update = function() {
			console.log('update', json, lng)
			self.lang = {};
			angular.forEach(json, function(value, key) {
				self.lang[key] = value[lng];
			});
		};
		(function() {
			lng = (navigator.language || navigator.browserLanguage).substring(0, 2).toLowerCase();
			if (lng !== 'ru' && lng !== 'en') {
				lng = 'ru';
			}
			$http.get('/lang.json').then(function(resp) {
				json = resp.data;
				self.update();
				$rootScope.$broadcast('lang-is-loaded');
			}, function(resp) {
				console.error(resp)
			})
		})();

	});

