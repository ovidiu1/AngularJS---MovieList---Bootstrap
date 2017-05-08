(function () {
    'use strict';

    angular.module('MovieList').config(config);
    config.$inject = ['$routeProvider', '$locationProvider'];
    function config($routeProvider, $locationProvider) {

        $routeProvider
        .when("/", { templateUrl: "app/pages/home/home.html", controller: "HomeController as  ho" })
           .when("/404", { templateUrl: "app/pages/error/404.html", controller: "ErrorController as er" })
            
            .otherwise({
                redirectTo: '/404'
            });

          $locationProvider.hashPrefix('');
    }
})();