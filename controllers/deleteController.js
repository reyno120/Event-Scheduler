const Event = require('../models/Event');

module.exports = (req, res) => {
    Event.deleteOne({
        eventName: req.body.eventName,
        userid: req.session.userId 
    },
    function(err, event) {
        return res.redirect('/');
    });
}