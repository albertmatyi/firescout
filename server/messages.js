'use strict';

Meteor.publish('messages', function () {
    return App.collections.messages.find({});
});

