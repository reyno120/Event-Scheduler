const Event = require('../models/Event');

module.exports = (req, res) => {
    Event.deleteOne({
        eventName: req.body.eventName,
        userid: req.session.userId 
    },
    function(error, event) {
        if(error) throw error;
        console.log("event deleted");
        res.json(event);
    });
}