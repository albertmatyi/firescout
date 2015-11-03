'use strict';
App.component('collections').expose({
    messages: new Meteor.Collection('messages'),
    events: new Meteor.Collection('events')
});
App.collections.messages.allow({
    insert: function (userId, doc) {
        doc.userId = userId;
        doc.created = +new Date();
        return userId && doc.body;
    },
    update: function (userId, doc, fieldNames, modifiers) {
        var isMember = doc.memberIds.indexOf(userId) !== -1;
        console.log(arguments);
        var oneField = fieldNames.length === 1;
        var wantsToJoin = oneField && (modifiers.$push && modifiers.$push.memberIds === userId);
        var editSummary = oneField && (modifiers.$set && modifiers.$set.summary);
        var addTag = oneField && (modifiers.$push && modifiers.$push.tags);
        var removeTag = oneField && (modifiers.$pull && modifiers.$pull.tags);
        return wantsToJoin || (isMember && (editSummary || addTag || removeTag));
    },
    remove: function (userId, doc) {
        return doc.ownerId === userId;
    }
});
App.collections.messages.allow({
    insert: function (userId, doc) {
        var idx = App.collections.events.find().count();
        doc.image = '/images/mood/' + (idx % 30) + '.jpg'
        return userId && doc.message;
    },
    update: function (userId, doc, fieldNames, modifiers) {
        var isMember = doc.memberIds.indexOf(userId) !== -1;
        console.log(arguments);
        var oneField = fieldNames.length === 1;
        var wantsToJoin = oneField && (modifiers.$push && modifiers.$push.memberIds === userId);
        var editSummary = oneField && (modifiers.$set && modifiers.$set.summary);
        var addTag = oneField && (modifiers.$push && modifiers.$push.tags);
        var removeTag = oneField && (modifiers.$pull && modifiers.$pull.tags);
        return wantsToJoin || (isMember && (editSummary || addTag || removeTag));
    },
    remove: function (userId, doc) {
        return doc.ownerId === userId;
    }
});
