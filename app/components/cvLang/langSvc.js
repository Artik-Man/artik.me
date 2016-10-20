angular.module('cvLang', [])
	.service('cvLang', function($http, $rootScope) {
		var self = this;
		var json = {};
		self.lng = 'ru';
		self.lang = {};
		self.changeLng = function() {
			if (self.lng == 'ru') {
				self.lng = 'en'
			} else {
				self.lng = 'ru'
			}
			self.update();
		};
		self.update = function() {
			self.lang = {};
			angular.forEach(json, function(value, key) {
				self.lang[key] = value[self.lng];
			});
		};
		(function() {
			self.lng = (navigator.language || navigator.browserLanguage).substring(0, 2).toLowerCase();
			if (self.lng !== 'ru' && self.lng !== 'en') {
				self.lng = 'ru';
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

