(function () {
    "use strict";

    angular.module('public')
    .service('signupService', signupService);

    signupService.$inject = ['$http'];
    function signupService($http) {
        var service = this;
        var user_copy = {};

        service.validateMenuItem = function (short_name) {
            var promise = $http.get('https://victorique-res-server.herokuapp.com/menu_items/'+
            short_name + '.json');

            return promise;
        };

        service.saveUser = function (user) {
            user_copy = angular.copy(user);
            console.log("saved: ", user_copy);
            // return user_copy;
        }

        service.getUser = function () {
            return user_copy;
        }
    }

})();
