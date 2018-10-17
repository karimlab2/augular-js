(function () {
    "use strict";

    angular.module('public')
    .controller('UserinfoController', UserinfoController);

    UserinfoController.$inject = ['signupService']
    function UserinfoController(signupService) {
        var userinfo = this;

        userinfo.user = signupService.getUser();
        userinfo.user_exists = Object.keys(userinfo.user).length > 0;
        console.log(userinfo.user);
    }
})();
