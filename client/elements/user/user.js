'use strict';

var REAL_PICS = {
    alex: 'alex',
    galina: 'galina',
    jonas: 'jonas',
    julian: 'julian',
    kate: 'kate',
    matyas: 'matyas',
    linda: 'linda'
};

Template.user.helpers({
    image: function () {
        var name = this && this.profile && this.profile.name ?
            this.profile.name.trim().toLowerCase() : 'Anonymus';
        if (REAL_PICS[name]) {
            return '/images/users/' + REAL_PICS[name] + '.jpg';
        } else if (this.profile && this.profile.image) {
            return this.profile.image;
        } else {
            return this.services &&
            this.services.twitter &&
            this.services.twitter.profile_image_url ?
                this.services.twitter.profile_image_url.replace(/_normal/, '_bigger') : '/images/user.png';
        }
    },
    name: function () {
        return this.profile && this.profile.name ? this.profile.name : 'Anonymus';
    }
});