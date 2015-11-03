'use strict';

Router.route('map', {
    path: '/map/:eventId?',
    onBeforeAction: function () {
        this.params.eventId && Session.set('map.eventId', this.params.eventId);
        this.next();
    },
    data: function () {
        return {
            eventInfos: App.collections.events.find()
        };
    }
});
