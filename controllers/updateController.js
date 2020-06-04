const Events = require('../models/Event');

module.exports = (req, res) => {
    // console.log(typeof(req.body.eventName));
    // console.log(typeof(toString(req.body.eventDesc)));
    // console.log(typeof(req.body.eventTime));
    // console.log(typeof(req.body.eventLoc));
    // console.log(typeof(toString(req.body.eventReminder)));
    // console.log(typeof(req.body.eventDate));
    Events.findByIdAndUpdate(
        { _id: req.body.objectId },
        {
        eventName: toString(req.body.eventName),
        eventDate: toString(req.body.eventDate),
        eventLoc: toString(req.body.eventLoc),
        eventTime: toString(req.body.eventTime),
        eventDesc: toString(req.body.eventDesc),
        eventReminder: toString(req.body.eventReminder),
        userid: req.session.userid
    },
    function(error, result) {
        console.log("Event Updated!");
        if(error) throw error;
        else res.send(result);
    });
}