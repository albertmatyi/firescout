'use strict';

Template.mapPin.helpers({
    active: function () {
        return Session.get('map.eventId') === this._id;
    }
});