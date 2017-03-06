angular.module('scroll', [])
	.directive('scroll', function($rootScope, throttle) {
		return function() {
			var element = angular.element(window);
			var fn = throttle(function(s) {
				$rootScope.$broadcast('scroll', {top: s});
			}, 100);
			element.bind('scroll', function() {
				var s = element.scrollTop();
				if (s > 100) {
					fn(s);
				} else {
					$rootScope.$broadcast('scroll', {top: s});
				}
			});
		};
	});

