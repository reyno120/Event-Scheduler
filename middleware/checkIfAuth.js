const User = require('../models/User');

module.exports = (req, res, next) => {
    User.findOne({_id: req.session.userId}, (error, user) => {
        if (error) throw error;
        if(user) {
            next();
        }
        else {
            res.json({userEvents: []});
        }
    });
}