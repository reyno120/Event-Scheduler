const Events = require('../models/Event');

module.exports = (req, res) => {
    Events.findByIdAndUpdate(
        { _id: req.body.objectId },
        {
        eventName: req.body.eventName,
        eventDate: req.body.eventDate,
        eventLoc: req.body.eventLoc,
        eventTime: req.body.eventTime,
        eventDesc: req.body.eventDesc,
        eventReminder: req.body.eventReminder,
        userid: req.session.userId
    },
    function(error, result) {
        if(error) throw error;
        else res.send(result);
    });
}