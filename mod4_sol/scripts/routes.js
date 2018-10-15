(function () {
    'use strict';

    angular.module('MenuApp')
    .config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'templates/home.html'
        })

        .state('categories', {
            url: '/categories',
            templateUrl: 'templates/categories_list.template.html',
            controller: 'categoriesController as cateCtrl',
            resolve: {
                // categories: ['MenuDataService', function(MenuDataService){
                //     return MenuDataService.getAllCategories();
                // }]
                categories: ['MenuDataService', function(MenuDataService) {
                    return MenuDataService.getAllCategories().then(function(response) {
                        return response.data;
                    });
                }]
            }
        });
    }

})();
