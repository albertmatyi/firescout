'use strict';

Meteor.publish('events', function () {
    return App.collections.events.find({});
});
