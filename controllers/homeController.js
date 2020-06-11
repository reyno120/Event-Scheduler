const Events = require('../models/Event');
const Users = require('../models/User');

module.exports = (req, res) => {
    Events.find({userid: req.session.userId}, (error, events) => {
        if(error) throw error;
        res.json({userEvents: events});
    });
}