const User = require('../models/User');

module.exports = (req, res, next) => {
    User.findById(req.session.userId, (error, user) => {
        var loggedIn = false;
        if(error || !user) {
            // return res.redirect('/auth/login');
            // return res.json({loggedIn: false});
            res.loggedIn = false;
        }
        else {
            res.loggedIn = true;
            res.redirect('/home');
        }
        next();
    });
}