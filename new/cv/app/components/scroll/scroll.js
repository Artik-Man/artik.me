angular.module('scroll', [])
	.directive('scroll', function($rootScope) {
		return function() {
			var element = angular.element('.nano-content');
			element.bind('scroll', function() {
				$rootScope.$broadcast('scroll', {top: element.scrollTop()});
			});
		};
	});

