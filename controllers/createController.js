const Event = require('../models/Event');

module.exports = (req, res) => {
    Event.updateOne({
        eventName: req.body.oldEventName,
        userid: req.session.userId 
    },
        {$set: {
        eventName: req.body.eventName,
        eventDate: req.body.eventDate,
        eventLoc: req.body.eventLoc,
        eventTime: req.body.eventTime,
        eventDesc: req.body.eventDesc,
        eventReminder: req.body.eventReminder,
        oldEventName: req.body.oldEventName,
        userid: req.session.userId 
        }
    },
    {
        upsert: true
    },
    function(err, event) {
        return res.redirect('/');
    });
}
