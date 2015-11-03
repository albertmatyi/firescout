'use strict';

Template.chat.helpers({
    messages: function () {
        return App.collections.messages.find({
            eventId: this.eventId
        }, {
            sort: {
                created: 1
            }
        });
    }
});

Template.chatMessage.helpers({
    time: function () {
        if (!this.created) {
            return 'moments ago';
        }
        var minutes = ~~((+new Date() - this.created) / (1000 * 60));
        return minutes > 2 ? minutes + 'm ago' : 'just now';
    },
    userData: function () {
        var virtName = this.userId.split('@')[0];
        return Meteor.users.findOne(this.userId) || {
                profile: {
                    name: virtName
                }
            };
    }
});

Template.chatForm.events({
    'submit .new-message-form': function (e) {
        e.preventDefault();
        var $input = $('.new-message.form-control');
        var val = $input.val().trim();
        if (val) {
            var message = {
                body: val,
                created: +new Date(),
                eventId: Session.get('event.currentId')
            };
            //console.log(message);
            App.collections.messages.insert(message, function (err) {
                if (!err) {
                    $input.val('');
                } else {
                    console.error(err);
                }
            });
        }
    }
});
//Meteor.startup(function () {
//
//    Tracker.autorun(function () {
//        var count = App.collections.messages
//            .find({eventId: Session.get('event.currentId')}).count();
//        setTimeout(function () {
//            Session.set('chat.newMessageTrigger', count);
//        }, 250);
//    });
//
//    Tracker.autorun(function () {
//        Session.get('chat.newMessageTrigger');
//        App.chat.scrollToBottom();
//    });
//});

App.component('chat').expose({
    scrollToBottom: function () {
        $('.chat .messages').animate({scrollTop: 999999});
    }
});

Template.chatMessage.onRendered(App.chat.scrollToBottom);
