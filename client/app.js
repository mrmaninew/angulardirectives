'use strict';
var ParentCtrl = function (obfuscatedScope, obfuscatedFactory) {
    obfuscatedScope.value = "myValues";

    obfuscatedScope.lists = obfuscatedFactory.getAllList();
    console.log(obfuscatedScope.lists);

    obfuscatedScope.listLength = obfuscatedScope.lists.length;

    obfuscatedScope.someText = "";

    obfuscatedScope.showLength = function (len) {
        console.log("the length");
        alert("The total length is" + len);
    };
};
ParentCtrl.$inject = ['$scope', 'appFactory', '$log'];
angular.module('demopod', [])
    .config(['$provide', function ($provide) {
        $provide.decorator('$log', [
            '$delegate',
            function $logDecorator($delegate) {
                var originalWarn = $delegate.warn;
                $delegate.warn = function(msg) {
                    msg = 'Decorated Warn: ' + msg;
                    originalWarn.apply($delegate, arguments);
                };
                return $delegate;
            }
        ]);
    }])
    .controller('parentCtrl', ['$scope', function ($scope) {
        console.log('in parent controller');
    }])
    .controller('mainCtrl', ['$scope', '$injector', '$controller', '$log',
        function ($scope, $injector, $controller, $log) {
            $injector.invoke(ParentCtrl, this, { $scope: $scope });
            $controller('parentCtrl', { $scope: $scope });
            console.log($injector.has('$scope'));
            $log.warn('some');
        }])
    .directive('header', [function () {
        return {
            restrict: 'E',
            scope: {},
            replace: true,
            templateUrl: '/directive/header.html',
            link: function (scope, element, attr) { }
        }
    }])
    .directive('footerTemplate', [function () {
        return {
            restrict: 'EA',
            scope: true,
            replace: true,
            templateUrl: '/directive/footer.html',
            link: function (scope, element, attrs) {
                // console.log(scope.value);
            }
        }
    }])
    .directive('jumbotron', [function () {
        return {
            restrict: 'EA',
            scope: true,
            replace: true,
            templateUrl: '/directive/jumbotron.html'
        }
    }])
    .directive('mybutton', [function () {
        return {
            restrict: 'C',
            template: '<p><a class="btn btn-lg btn-success" href="#" role="button">Sign up today</a></p>'
        }
    }])
    .directive('list', [function () {
        return {
            restrict: 'E',
            replace: true,
            scope: true,
            templateUrl: '/directive/articles.html',
            link: function (scope, element, attrs) {
                // console.log(scope.lists);
            }
        }
    }])
    .directive('listlength', [function () {
        return {
            restrict: 'E',
            scope: {
                length: '@'
            },
            templateUrl: '/directive/interpolate.html'
        }
    }])
    .directive('twoway', [function () {
        return {
            restrict: 'E',
            scope: {
                data: '='
            },
            templateUrl: '/directive/twowaybinding.html'
        }
    }])
    .directive('expression', ['appService', function (appService) {
        return {
            restrict: 'E',
            scope: {
                show: '&'
            },
            templateUrl: '/directive/expression.html',
            link: function (scope, element, attrs) {
                scope.lengthCount = "";
                scope.lengthCount = appService.getList().length;
            }
        }
    }]);
