angular.module('scroll', [])
    .directive('scroll', function ($rootScope, $window) {
        return function () {
            var element = angular.element('.nano-content');
            element.bind('scroll', function () {
                $rootScope.$broadcast('scroll', {top: element.scrollTop()});
            });
        };
    });

