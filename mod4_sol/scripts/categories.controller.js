(function () {
    'use strict';

    angular.module('MenuApp')
    .controller('categoriesController', categoriesController);

    categoriesController.$inject = ['categories'];
    function categoriesController(categories) {
        var ctrl = this;
        ctrl.categories = categories;
        console.log('in controller');
        console.log(ctrl.categories);
        // categories.then(function (result) {
            // ctrl.categories = result.data;
        // })
        // .catch(function (error) {
        //     console.log('somethin\'s wrong!');
        // });
    }

})();
