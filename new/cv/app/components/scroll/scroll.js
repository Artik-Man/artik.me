angular.module('scroll', [])
    .directive('scroll', function ($rootScope, $window) {
        return function () {
            angular.element($window).bind('scroll', function () {
                $rootScope.$broadcast('scroll', {top: $window.pageYOffset});
            });
        };
    });