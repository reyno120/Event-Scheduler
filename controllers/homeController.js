const Events = require('../models/Event');

module.exports = (req, res) => {
    Events.find({userid: req.session.userId}, (error, events) => {
        res.render('home', {events: events});
    });
}