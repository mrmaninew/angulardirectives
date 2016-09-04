'use strict';
angular.module('demopod')
    .factory('appFactory', [function() {
        var list = [
            { 'value': 'some values 1' },
            { 'value': 'some values 2' },
            { 'value': 'some values 3' },
            { 'value': 'some more values 4' }
        ];
        return {
            getAllList: function() {
                return list;
            }
        }
    }]);
