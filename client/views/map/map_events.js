'use strict';

Template.map.events({
    'touchbegin .map, click .map': function (e) {
        if (!e.isDefaultPrevented()) {
            Session.set('map.eventId', null);
        }
    }
});

Template.mapPin.events({
    'touchbegin .pin, click .pin': function (e) {
        e.preventDefault();
        Session.set('map.eventId', this._id);
    }
});

Template.mapPopup.events({
    'touchbegin .popup, click .popup': function (e) {
        e.preventDefault();
        Router.go('event', this);
    }
});

