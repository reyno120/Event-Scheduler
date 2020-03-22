const bcrypt = require('bcrypt');
const User = require('../models/User');

module.exports = (req, res) => {
    const { username, password } = req.body;

    User.findOne({username:username}, (error, user) => {
        if(error) { // maybe???
            const validationErrors = Object.keys(error.errors).map(key => error.errors[key].message);
            req.flash('validationErrors', validationErrors);
            return res.redirect('/auth/login');
        }
        if(user) {
            bcrypt.compare(password, user.password, (error, same) => {
                if(same) {
                    req.session.userId = user._id;
                    res.redirect('/');  // needs to fix for validation
                }
                else {
                    res.redirect('/auth/login');    // does this need changed?
                }
            });
        }
    });
}