'use strict';

var WELCOME_TIMEOUT = 3000;

Router.route('welcome', {
    onAfterAction: function () {
        setTimeout(function () {
            Router.go('login');
        }, WELCOME_TIMEOUT);
    }
});