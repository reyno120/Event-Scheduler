const Events = require('../models/Event');

module.exports = (req, res) => {
    Events.findByIdAndUpdate(req.body._id, {
        eventName: req.body.eventName,
        eventDate: req.body.eventDate,
        eventLoc: req.body.eventLoc,
        eventTime: req.body.eventTime,
        eventDesc: req.body.eventDesc,
        eventReminder: req.body.eventReminder
    });
    res.redirect('/');
}