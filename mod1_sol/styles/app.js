(function () {
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope) {
    $scope.items = [];
    $scope.message = "Please enter data first";

    $scope.readLunchItems = function () {
      // var lunchItems = document.getElementById("lunch-menu").value;
      console.log($scope.items);

      if ($scope.items.length != 0) {
        var lunchItems = $scope.items.split(',');
        $scope.message = lunch_or_not(lunchItems);
      }
    };

    function lunch_or_not(lunchItems) {
      var ret_message = "";
      console.log(lunchItems);
      if (lunchItems.length==1 && lunchItems[0] === "") {
        ret_message = "Please enter data first";
      }
      else if (lunchItems.length <= 3){
        ret_message = "Enjoy!";
      }
      else {
        ret_message = "Too much!"
      }
      return ret_message;
    }


  }
}) ();
