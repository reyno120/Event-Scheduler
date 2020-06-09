const Event = require('../models/Event');


module.exports = (req, res) => {
    Event.create({
        eventName: req.body.eventName,
        eventDate: req.body.eventDate,
        eventLoc: req.body.eventLoc,
        eventTime: req.body.eventTime,
        eventDesc: req.body.eventDesc,
        eventReminder: req.body.eventReminder,
        userid: req.session.userId 
    }, 
    (error, event) => {
        if (error) throw error;
    });
}
