'use strict';
angular.module('haochiquanApp')
    .controller('TabCtl', function ($scope) {

        $scope.tabVisited = [];

        $scope.visiter = function(length, index) {
            event.preventDefault();
            event.stopPropagation();
            if (0 === $scope.tabVisited.length) {
                for (var i = 0; i < arguments[0]; i++) {
                    if (arguments[1] === i) {
                        $scope.tabVisited.push(true);
                    } else {
                        $scope.tabVisited.push(false);
                    }
                }
            } else {
                for (var j = 0; j < $scope.tabVisited.length; j++) {
                    if (j === arguments[1]) {
                        $scope.tabVisited[j] = true;
                    } else {
                        $scope.tabVisited[j] = false;
                    }
                }
            }
        };
    });
