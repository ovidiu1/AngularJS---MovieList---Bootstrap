(function () {
    'use strict';

    angular.module('MovieList')
        .controller('ErrorController', ErrorController);
    ErrorController.$inject = ['$scope'];
    function ErrorController( $scope) {
        var er = this;
    }
})();