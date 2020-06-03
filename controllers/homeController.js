const Events = require('../models/Event');
const Users = require('../models/User');

module.exports = (req, res) => {
    Events.find({userid:"5e827cd9871ad3277c267b09"}, (error, events) => {   // need to change query later
        if(error) throw error;
        res.json({userEvents: events});
    });
}