(function () {
    'use strict';
    
    angular.module('MovieList').constant('DataConstant', {
        Th:[
            {
               name:'Title',
               name1:'Rating',
               name2: 'Year',
               name3: 'Plot'
            }
        ],
        Data: [
        {
            title: 'Avatar',
            rating: 'PG-13',
            year: 2009,
            plot:'Come cool blue...'
        },
        {
            title: 'Star Wars VII',
            rating: 'PG-13',
            year: 2015,
            plot:'Plot unknown'
        },
        {
           title: 'Star Trek',
           rating: 'PG-13',
            year: 2013,
            plot:'Citizen what is your name..'
        }
        ]
    });
})();



