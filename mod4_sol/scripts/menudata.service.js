(function () {
    'use strict';

    angular.module('data')
    .service('MenuDataService', MenuDataService);

    // MenuDataService
    MenuDataService.$inject = ['$http']
    function MenuDataService($http) {
        var service = this;
        console.log('running get request');
        // return a PROMISE
        service.getAllCategories = function() {
            return $http({
                method: "GET",
                url: "https://davids-restaurant.herokuapp.com/categories.json"
            })
            .then(function(result) {
                // console.log(result.data);
                return result;
            })
            .catch(function (error) {
                console.log("get request on all category failed");
            });
        };

        service.getItemsForCategory = function(categoryShortName) {
            return $http({
                method: "GET",
                url: "https://davids-restaurant.herokuapp.com/categories.json",
                params: {
                    category: categoryShortName
                }
            })
            .then(function(result) {
                return result;
            })
            .catch(function (error) {
                console.log("get request on all category failed");
            });
        }
    }
})();
