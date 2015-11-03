'use strict';

var ALLOW_URLS = {
    '/welcome': true,
    '/': true
};

var isFunding = function () {
    return !!App.admin.collection.findOne('funding');
};
Router.configure({
    layoutTemplate: 'layout',
    waitOn: function () {
        return [Meteor.subscribe('users'),
            Meteor.subscribe('events'),
            Meteor.subscribe('messages')];
    },
    onBeforeAction: function () {
        var user = Meteor.user();
        var url = Router.current().url;
        var isAllowed = ALLOW_URLS[url] || user;
        if (isAllowed) {
            if (url === '/login') {
                Router.go('map');
            } else {
                this.next();
            }
        } else {
            this.render('login');
        }
    }
});

Router.route('/', {
    name: 'home',
    action: function () {
        Router.go('welcome');
    }
});