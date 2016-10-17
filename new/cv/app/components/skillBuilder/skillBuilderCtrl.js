angular.module('skillBuilder', [])

	.directive('skillBuilder', ['$rootScope', function($rootScope) {
		return {
			restrict: 'A',
			scope: {
				skill: '='
			},
			replace: false,
			templateUrl: 'app/components/skillBuilder/skillBuilderTmpl.html',
			link: function(scope, element) {
				var offset = 100000;
				scope.rotate = -90;
				scope.percent = scope.skill.percent;
				scope.image = scope.skill.image;
				scope.title = scope.skill.title;
				var x = true;

				$rootScope.$on('scroll', function(event, data) {
					offset = $(element).offset().top;
					if (data.top + $(window).height() * 0.7 > offset && x) {
						scope.rotate = -90 * (100 - scope.skill.percent) / 100;
						x = false;
						scope.$apply();
					}
				})
			}
		}
	}]);