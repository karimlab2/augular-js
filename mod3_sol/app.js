(function () {
    'user strict';

    angular.module('NarrowItDownApp', [])
    .controller('NarrowItDownController', NarrowItDownController)
    .service('MenuSearchService', MenuSearchService)
    .directive('foundItems', foundItemsDirective);

    function foundItemsDirective() {
        var ddo = {
            scope: {
                // restrict: 'E',
                items: '<',
                onRemove: '&'
            },
            controller: foundItemsDirectiveController,
            controllerAs: 'foundDir',
            bindToController: true,
            templateUrl: 'foundItems.html'
        };
        return ddo;
    }

    function foundItemsDirectiveController() {

    }

    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController(MenuSearchService) {
        var search = this;
        // $scope.searchTerm = "";
        // ctrl.found = [];

        search.getMatchedMenuItems = function (searchTerm) {
            // console.log(searchTerm);
            var promise = MenuSearchService.getMatchedMenuItems(searchTerm);
            // ctrl.found = [];
            promise.then(function (response) {
                search.found = response;
                // console.log(this);
                // console.log(ctrl.found);
            }).catch(function (error) {
                console.log("error coming back");
            })
        };

        search.removeItem = function(index) {
            return search.found.splice(index, 1);
        };
    }

    MenuSearchService.$inject = ['$http'];
    function MenuSearchService($http) {
        var service = this;

        var foundItems = [];

        service.getMatchedMenuItems = function(searchTerm) {
            return $http({
                method: "GET",
                url: "https://davids-restaurant.herokuapp.com/menu_items.json",
                // params: {
                //     category: searchTerm
                // }
            }).then(function(result) {
                var temp = result.data.menu_items;
                for(var i = 0; i < temp.length; i++) {
                    //found
                    // console.log(temp[i].description);
                    if (temp[i].description.indexOf(searchTerm.toLowerCase()) != -1) {
                        foundItems.push(temp[i]);

                    }
                }
                console.log(foundItems);
                return foundItems;
            }).catch(function (error) {
                console.log("get request failed");
            });
        };
    }
})();
