const Events = require('../models/Event');
const Users = require('../models/User');

module.exports = (req, res) => {
    // if(res.loggedIn) {
        Events.find({userid: req.session.userId}, (error, events) => {   // need to change query later
            if(error) throw error;
            // res.json({userEvents: events}, {isLoggedIn: true});
            res.json({userEvents: events});
            // console.log(res);
        });
    // }
    // else {
        // res.json({
        //     userEvents: [], isLoggedIn: false
        // });
    // }
}