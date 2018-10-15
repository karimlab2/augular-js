(function () {
    'use strict';

    angular.module('MenuApp')
    .controller('categoriesController', categoriesController);

    categoriesController.$inject = ['categories'];
    function categoriesController(categories) {
        var ctrl = this;
        ctrl.categories = categories;
        console.log('in controller');
        // categories.then(function (result) {
            // ctrl.categories = result.data;
        // })
        // .catch(function (error) {
        //     console.log('somethin\'s wrong!');
        // });
    }

})();
