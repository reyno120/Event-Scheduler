const User = require('../models/User');

module.exports = (req, res, next) => {
    User.findOne({_id: req.session.userId}, (error, user) => {
        if (error) throw error;
        if(user) {
            // console.log("User found (in checkIfAuth middleware");
            next();
        }
        else {
            // console.log("User NOT found (in checkIfAuth middleware");
            res.json({userEvents: []});
        }
    });
}