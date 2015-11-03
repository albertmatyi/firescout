'use strict';

Router.route('event', {
    path: '/events/:_id',
    onBeforeAction: function () {
        Session.set('event.currentId', this.params._id);
        this.next();
    },
    data: function () {
        return {
            event: App.collections.events.findOne(this.params._id)
        };
    }
});