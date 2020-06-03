const Events = require('../models/Event');

module.exports = (req, res) => {
    Events.find({eventName: "test event 1"}, (error, event) => {
        if(error) throw error;
        res.json({event: event});
    });
}