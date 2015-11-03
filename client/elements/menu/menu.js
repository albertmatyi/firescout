'use strict';

Template.menu.events({
    'click .trigger.btn': function (e) {
        Session.set('menu.active', true);
    },
    'click .xlose.btn': function (e) {
        Session.set('menu.active', false);
    },
    'click .pane-wrapper': function (e) {
        if (!e.defaultPrevented) {
            Session.set('menu.active', false);
        }
    },
    'click .pane': function (e) {
        e.stopPropagation();
    }
});

var MENUS = {
    base: {
        localFeed: {
            _id: 'localFeed',
            name: 'Local Feed', icon: 'comment',
            handler: function (e) {
                alert('You live in a boring area, no feed for you. Read a book!');
                return false;
            }
        },
        logout: {
            _id: 'logout',
            name: 'Logout', icon: 'sign-out',
            handler: function () {
                Meteor.logout();
            }
        }
    },
    map: {
        hotlist: {
            _id: 'hotlist',
            name: 'Hotlist', icon: 'fire',
            handler: function (e) {
                alert('Looking for fun eh? Getting drunk are we?')
                return false;
            }
        }, filters: {
            _id: 'filters',
            name: 'Filters', icon: 'check',
            handler: function (e) {
                alert('Sorry, man. No time for that now.')
                return false;
            }
        }
    }, event: {
        map: {
            _id: 'map',
            name: 'Map', icon: 'map',
            handler: function (e) {
                Router.go('map');
            }
        }, book: {
            _id: 'book',
            name: 'Book ticket', icon: 'cc-mastercard',
            handler: function (e) {
                alert('Sorry to let you know, but you\'re broke!');
                return false;
            }
        }, discount: {
            _id: 'discount',
            name: 'Ask for discount', icon: 'circle-o',
            handler: function (e) {
                alert('No');
                return false;
            }
        }
    }
};

_.each(MENUS, function (menu) {
    _.extend(menu, MENUS.base);
});

var getMenu = function () {
    var menu = MENUS[Router.current().route.getName()] || MENUS.default;

    return menu;
};
Template.menu.helpers({
    active: function () {
        return Session.get('menu.active') ? 'active' : null;
    },
    elements: function () {
        var menu = getMenu();
        return _.map(menu, _.identity);
    },
    title: function () {
        return Session.get('menu.title');
    }
});

Template.menuElement.events({
    'click .element': function (e) {
        e.preventDefault();
        var menuEl = getMenu()[this._id];
        menuEl.handler(e);
        Session.set('menu.active', false);
        Session.set('menu.title', menuEl.name);
    }
});