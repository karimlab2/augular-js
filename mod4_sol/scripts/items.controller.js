(function () {
    'use strict';

    angular.module('MenuApp')
    .controller('itemsController', itemsController);

    itemsController.$inject = ['items'];
    function itemsController(items) {
        var ctrl = this;
        ctrl.items = items;
        console.log('in controller');
        console.log(ctrl.items);
        // categories.then(function (result) {
            // ctrl.categories = result.data;
        // })
        // .catch(function (error) {
        //     console.log('somethin\'s wrong!');
        // });
    }

})();
