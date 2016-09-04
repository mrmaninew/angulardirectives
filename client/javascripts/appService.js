'use strict';
angular.module('demopod')
    .service('appService', [function() {
        this.list = [
            { 'value': 'some values 1' },
            { 'value': 'some values 2' }
        ];
        this.getList = function() {
            return this.list;
        }
        
    }]);
