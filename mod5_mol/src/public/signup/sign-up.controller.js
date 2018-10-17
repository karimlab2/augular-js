(function () {
    'use strict';

    angular.module('public')
    .controller('SignupController', SignupController);

    SignupController.$inject = ['signupService']
    function SignupController(signupService) {
        var signup = this;
        // var saved_user = {};
        signup.menuitem_valid = true;

        signup.submit = function () {
            console.log(signup.user.menuitem);
            var promise = signupService.validateMenuItem(signup.user.menuitem);

            promise.then( function (response) {
                console.log("menuitem found");
                signup.menuitem_valid = true;
                signup.saved_user = signupService.saveUser(signup.user);
            })
            .catch(function (error) {
                signup.menuitem_valid = false;
                console.log("menuitem not found");
            });
        }


    }
})();
