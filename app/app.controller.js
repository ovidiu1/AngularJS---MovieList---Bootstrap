(function() {
    'use strict';

    angular.module('MovieList')
        .controller('AppController', AppController); 
    AppController.$inject = ['$rootScope', '$location'];
    function AppController($rootScope, $location) {
        var ap = this;
        ap.message = "AppController Loaded!";
    };

})();
