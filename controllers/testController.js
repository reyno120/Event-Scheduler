const Events = require('../models/Event');

module.exports = (req, res) => {
    Events.find({eventName: "test event 1"}, (error, events) => {
        if(error) throw error;
        res.json({events: events});
    });
}