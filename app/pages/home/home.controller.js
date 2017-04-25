(function () {
    'use strict';

    angular.module('MovieList')
        .controller('HomeController', HomeController);
    HomeController.$inject = ['$scope','DataConstant'];
    function HomeController($scope,DataConstant) {
        var ho = this;
        ho.getData = getData;
        ho.removeMovie = removeMovie;
        ho.addMovie = addMovie;
		ho.selectMovie = selectMovie;
		
        function getData(){
            ho.th = DataConstant.Th;
        	ho.data = DataConstant.Data;
        }

        function removeMovie(movie){
        	var index = ho.data.indexOf(movie);
        	ho.data.splice(index, 1);
        }

        function addMovie(){
        	
        	var newItem = {
        		title: ho.movie.title,
        		rating: ho.movie.rating,
            	year: ho.movie.year,
            	plot: ho.movie.plot
        	};
        	ho.data.push(newItem);	
        }
        
        function selectMovie(movie){
        	 ho.movie = movie;
        }
        
        ho.getData();
    }
})();