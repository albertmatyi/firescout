'use strict';


var CATEGORIES = ['bar', 'kino', 'club'];

var generateData = function () {
    var n = 15;
    //var data = [];
    //while (n--) {
    //    data.push({
    //        _id: Random.id(),
    //        venueName: 'R-Venue' + n * 13,
    //        eventName: 'L\'event' + n * 7,
    //        category: CATEGORIES[~~(Math.random() * CATEGORIES.length)],
    //        location: {
    //            x: ~~(Math.random() * 100),
    //            y: ~~(Math.random() * 100)
    //        },
    //        fireScouts: ~~(Math.random() * 35),
    //        startHour: ~~(18 + 5 * Math.random()),
    //        startMinute: (Math.random() > .5 ? '00' : '30')
    //    });
    //}
    var data = [{
        "_id": "PHYEngbyHguxBhJDt",
        "venueName": "SothSide Bar",
        "eventName": "Lazies",
        "category": "kino",
        "location": {"x": 32, "y": 65},
        "fireScouts": 11,
        "startHour": 19,
        "startMinute": "00",
        "image": "/images/mood/0.jpg"
    }, {
        "_id": "PYCZQT3Mqk94Npyfy",
        "venueName": "SothSide Bar",
        "eventName": "Lazies",
        "category": "club",
        "location": {"x": 16, "y": 85},
        "fireScouts": 1,
        "startHour": 20,
        "startMinute": "00",
        "image": "/images/mood/1.jpg"
    }, {
        "_id": "XakYNNiNP7t9kChSB",
        "venueName": "Cafe Cord",
        "eventName": "Cat Empire",
        "category": "kino",
        "location": {"x": 55, "y": 51},
        "fireScouts": 33,
        "startHour": 22,
        "startMinute": "00",
        "image": "/images/mood/2.jpg"
    }, {
        "_id": "JAb2hJbJfzrKDa8TS",
        "venueName": "SothSide Bar",
        "eventName": "Lazies",
        "category": "kino",
        "location": {"x": 48, "y": 73},
        "fireScouts": 3,
        "startHour": 19,
        "startMinute": "00",
        "image": "/images/mood/3.jpg"
    }, {
        "_id": "6dFatPiuPqgEG72P7",
        "venueName": "SothSide Bar",
        "eventName": "Lazies",
        "category": "bar",
        "location": {"x": 72, "y": 70},
        "fireScouts": 10,
        "startHour": 18,
        "startMinute": "30",
        "image": "/images/mood/4.jpg"
    }, {
        "_id": "doDigRdaZRLrPWH6F",
        "venueName": "SothSide Bar",
        "eventName": "Lazies",
        "category": "bar",
        "location": {"x": 64, "y": 36},
        "fireScouts": 17,
        "startHour": 20,
        "startMinute": "30",
        "image": "/images/mood/5.jpg"
    }, {
        "_id": "ArohKPnzDtJQTbk9F",
        "venueName": "SothSide Bar",
        "eventName": "Lazies",
        "category": "club",
        "location": {"x": 37, "y": 89},
        "fireScouts": 15,
        "startHour": 20,
        "startMinute": "30",
        "image": "/images/mood/6.jpg"
    }, {
        "_id": "dZ73htQYJopPiKcs3",
        "venueName": "SothSide Bar",
        "eventName": "Lazies",
        "category": "club",
        "location": {"x": 42, "y": 87},
        "fireScouts": 26,
        "startHour": 18,
        "startMinute": "00",
        "image": "/images/mood/7.jpg"
    }, {
        "_id": "ioyNgZB5TZCrwptwK",
        "venueName": "SothSide Bar",
        "eventName": "Lazies",
        "category": "bar",
        "location": {"x": 30, "y": 33},
        "fireScouts": 2,
        "startHour": 18,
        "startMinute": "30",
        "image": "/images/mood/8.jpg"
    }, {
        "_id": "oo7w9z66Gb4fdD2j6",
        "venueName": "SothSide Bar",
        "eventName": "Lazies",
        "category": "kino",
        "location": {"x": 31, "y": 3},
        "fireScouts": 20,
        "startHour": 18,
        "startMinute": "30",
        "image": "/images/mood/9.jpg"
    }, {
        "_id": "Mx3BpGnbB5dAnatjZ",
        "venueName": "SothSide Bar",
        "eventName": "Lazies",
        "category": "bar",
        "location": {"x": 10, "y": 69},
        "fireScouts": 14,
        "startHour": 20,
        "startMinute": "30",
        "image": "/images/mood/10.jpg"
    }, {
        "_id": "EyLyRQ38gP5pzodgX",
        "venueName": "SothSide Bar",
        "eventName": "Lazies",
        "category": "club",
        "location": {"x": 95, "y": 15},
        "fireScouts": 30,
        "startHour": 21,
        "startMinute": "00",
        "image": "/images/mood/11.jpg"
    }, {
        "_id": "bZAp6zs3QrAATd9iZ",
        "venueName": "SothSide Bar",
        "eventName": "Lazies",
        "category": "club",
        "location": {"x": 40, "y": 27},
        "fireScouts": 20,
        "startHour": 22,
        "startMinute": "30",
        "image": "/images/mood/12.jpg"
    }, {
        "_id": "vm3gGFBTjcJLKg7eJ",
        "venueName": "SothSide Bar",
        "eventName": "Lazies",
        "category": "kino",
        "location": {"x": 20, "y": 49},
        "fireScouts": 4,
        "startHour": 19,
        "startMinute": "30",
        "image": "/images/mood/13.jpg"
    }, {
        "_id": "AniF3mzqR6kQn8nyY",
        "venueName": "SothSide Bar",
        "eventName": "Lazies",
        "category": "bar",
        "location": {"x": 71, "y": 98},
        "fireScouts": 10,
        "startHour": 20,
        "startMinute": "00",
        "image": "/images/mood/14.jpg"
    }];
    return data;
};
App.collections.events.remove({});
var imgIdx = 0;

var addMessages = function (eventId) {
    var MINUTE = 60 * 1000;
    [{
        created: +new Date() - 10 * MINUTE,
        body: 'What\'s going on here?',
        userId: 'adam@firescout.com'
    }, {
        created: +new Date() - 5 * MINUTE,
        body: 'OMG, the band just started playing, it\'s defo a place to join!',
        userId: 'jenny@firescout.com'
    }, {
        created: +new Date() - 3 * MINUTE,
        body: 'I\'m joining with five friends. Arriving in 10. Have to finish the beers @augustinerKeller',
        userId: 'john@firescout.com'
    }].map(function (message) {
            message.eventId = eventId;
            App.collections.messages.insert(message);
        });
};

generateData().map(function (event) {
    event.image = '/images/mood/' + imgIdx + '.jpg';
    imgIdx++;
    App.collections.events.insert(event);
    if (App.collections.messages.find({eventId: event._id}).count() < 3) {
        addMessages(event._id);
    }
});