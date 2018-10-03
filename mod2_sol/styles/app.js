(function() {
    'use strict';

    angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {
        var to_buy_ctrl = this;

        to_buy_ctrl.items = ShoppingListCheckOffService.getToBuyItems();

        to_buy_ctrl.buyItem = function (index) {
            ShoppingListCheckOffService.buyItem(index);
        };
    };

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var bought_ctrl = this;
        bought_ctrl.items = ShoppingListCheckOffService.getBoughtItems();
        console.log(bought_ctrl.items);
    };

    function ShoppingListCheckOffService() {
        var service = this;

        // arrays to store to_buy and bought items
        var to_buy = [
            {name: "cookies", quantity: 10},
            {name: "chips", quantity: 10},
            {name: "drinks", quantity: 10},
            {name: "whipped cream", quantity: 10},
            {name: "eggs", quantity: 10}
        ];
        var bought = [];

        // expose the arrays to controllers
        service.getToBuyItems = function() {
            return to_buy;
        };

        service.getBoughtItems = function() {
            return bought;
        };

        service.buyItem = function(item_index) {
            bought.push(to_buy[item_index]);
            to_buy.splice(item_index, 1);
        };
    };
}) ();
