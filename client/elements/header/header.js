'use strict';

Template.header.events({
    'click .app-header': function () {
        Session.set('menu.active', true);
        //Router.go('map');
    }
});