'use strict';
angular.module('demopod', [])
    .controller('mainCtrl', ['$scope', 'appFactory', function($scope, appFactory) {
        $scope.value = "myValues";

        $scope.lists = appFactory.getAllList();
        console.log($scope.lists);

        $scope.listLength = $scope.lists.length;

        $scope.someText = "";

        $scope.showLength = function(len) {
            console.log("the length");
            alert("The total length is" + len);
        };
    }])
    .directive('header', [function() {
        return {
            restrict: 'E',
            scope: {},
            replace: true,
            templateUrl: '/directive/header.html',
            link: function(scope, element, attr) {}
        }
    }])
    .directive('footerTemplate', [function() {
        return {
            restrict: 'EA',
            scope: true,
            replace: true,
            templateUrl: '/directive/footer.html',
            link: function(scope, element, attrs) {
                // console.log(scope.value);
            }
        }
    }])
    .directive('jumbotron', [function() {
        return {
            restrict: 'EA',
            scope: true,
            replace: true,
            templateUrl: '/directive/jumbotron.html'
        }
    }])
    .directive('mybutton', [function() {
        return {
            restrict: 'C',
            template: '<p><a class="btn btn-lg btn-success" href="#" role="button">Sign up today</a></p>'
        }
    }])
    .directive('list', [function() {
        return {
            restrict: 'E',
            replace: true,
            scope: true,
            templateUrl: '/directive/articles.html',
            link: function(scope, element, attrs) {
                // console.log(scope.lists);
            }
        }
    }])
    .directive('listlength', [function() {
        return {
            restrict: 'E',
            scope: {
                length: '@'
            },
            templateUrl: '/directive/interpolate.html'
        }
    }])
    .directive('twoway', [function() {
        return {
            restrict: 'E',
            scope: {
                data: '='
            },
            templateUrl: '/directive/twowaybinding.html'
        }
    }])
    .directive('expression', ['appService', function(appService) {
        return {
            restrict: 'E',
            scope: {
                show: '&'
            },
            templateUrl: '/directive/expression.html',
            link: function(scope, element, attrs) {
                scope.lengthCount = "";
                scope.lengthCount = appService.getList().length;
            }
        }
    }]);
