'use strict';
var ParentCtrl = function(obfuscatedScope, obfuscatedFactory) {
    obfuscatedScope.value = "myValues";

    obfuscatedScope.lists = obfuscatedFactory.getAllList();
    //console.log(obfuscatedScope.lists);

    obfuscatedScope.listLength = obfuscatedScope.lists.length;

    obfuscatedScope.someText = "";

    obfuscatedScope.showLength = function(len) {
        // console.log("the length");
        alert("The total length is" + len);
    };
};
ParentCtrl.$inject = ['$scope', 'appFactory', '$log'];
angular.module('demopod', ['ui.grid',
        'ui.grid.edit'
    ])
    .config(['$provide', function($provide) {
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
    .controller('parentCtrl', ['$scope', function($scope) {
        // console.log('in parent controller');
    }])
    .controller('mainCtrl', ['$scope', '$injector', '$controller', '$log', '$window',
        function($scope, $injector, $controller, $log, $window) {
            $scope.gridOptions = {
                rowHeight: 34,
                minRowsToShow: 6,
                enableRowSelection: true,
                enableRowHeaderSelection: false
            };

            $scope.myData = [{
                "firstName": "Cox",
                "lastName": "Carney",
                "company": "Enormo",
                "employed": true
            }, {
                "firstName": "Lorraine",
                "lastName": "Wise",
                "company": "Comveyer",
                "employed": false
            }, {
                "firstName": "Nancy",
                "lastName": "Waters",
                "company": "Fuelton",
                "employed": false
            }, {
                "firstName": "Lorraine",
                "lastName": "Wise",
                "company": "Comveyer",
                "employed": false
            }, {
                "firstName": "Lorraine",
                "lastName": "Wise",
                "company": "Comveyer",
                "employed": false
            }, {
                "firstName": "Lorraine",
                "lastName": "Wise",
                "company": "Comveyer",
                "employed": false
            }, {
                "firstName": "Lorraine",
                "lastName": "Wise",
                "company": "Comveyer",
                "employed": false
            }, {
                "firstName": "Lorraine",
                "lastName": "Wise",
                "company": "Comveyer",
                "employed": false
            }, {
                "firstName": "Lorraine",
                "lastName": "Wise",
                "company": "Comveyer",
                "employed": false
            }, {
                "firstName": "Lorraine",
                "lastName": "Wise",
                "company": "Comveyer",
                "employed": false
            }, {
                "firstName": "Lorraine",
                "lastName": "Wise",
                "company": "Comveyer",
                "employed": false
            }, {
                "firstName": "Lorraine",
                "lastName": "Wise",
                "company": "Comveyer",
                "employed": false
            }];
            $scope.gridOptions.data = $scope.myData;

            // inject parent controller 
            $injector.invoke(ParentCtrl, this, { $scope: $scope });
            $controller('parentCtrl', { $scope: $scope });

            // Global window height 
            var loadedWinHeight = $window.innerHeight;
            console.log(loadedWinHeight);
            $scope.show = false;

            /* Change with fixed values */
            // angular.element($window).bind('resize', function() {
            //     console.log($window.innerHeight);
            //     if ($window.innerHeight > loadedWinHeight) {
            //         angular.element(document.getElementsByClassName('grid')[0]).css('height', ($window.innerHeight + 50) + 'px');
            //     } else if ($window.innerHeight === loadedWinHeight) {
            //         angular.element(document.getElementsByClassName('grid')[0]).css('height', 250 + 'px');
            //     } else if ($window.innerHeight < loadedWinHeight) {
            //         angular.element(document.getElementsByClassName('grid')[0]).css('height', 250 + 'px');
            //     }
            // });

            /* Change with row sizes */
            angular.element($window).bind('resize', function() {
                if ($window.innerHeight > loadedWinHeight) {
                    angular.element(document.getElementsByClassName('grid')[0]).css('height', ($scope.myData.length * 34) + 'px');
                } else if ($window.innerHeight === loadedWinHeight) {
                    angular.element(document.getElementsByClassName('grid')[0]).css('height', 250 + 'px');
                } else if ($window.innerHeight < loadedWinHeight) {
                    angular.element(document.getElementsByClassName('grid')[0]).css('height', 250 + 'px');
                }
            });


            /* style dynamic resize using view port */
            // angular.element($window).bind('resize', function() {
            //     console.log($window.innerHeight);
            //     if ($window.innerHeight > loadedWinHeight) {
            //         $scope.show = true;
            //     } else if ($window.innerHeight <= loadedWinHeight) {
            //         $scope.show = false;
            //     } else {
            //         $scope.show = false;
            //     }
            // });

            /* add class and remove class */
            // angular.element($window).bind('resize', function() {
            //     console.log($window.innerHeight);
            //     if ($window.innerHeight > loadedWinHeight) {
            //         angular.element(document.getElementsByClassName('grid')[0]).addClass('customClass');
            //     } else {
            //         angular.element(document.getElementsByClassName('grid')[0]).removeClass('customClass');
            //     }
            // });
        }
    ])
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
    .directive('jumbotron', ['$window', function($window) {
        return {
            restrict: 'EA',
            scope: true,
            replace: true,
            templateUrl: '/directive/jumbotron.html',
            link: function(scope, element, attrs) {
                // scope.onResize = function() {
                //     element.css('height', '600px');
                // };

                // angular.element($window).bind('resize', function() {
                //     scope.onResize();
                // })
            }
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
