const User = require('../models/User');
const path = require('path');

module.exports = (req, res) => {
    User.create(req.body, (error, user) => {
        if(error) {
            const validationErrors = Object.keys(error.errors).map(key => error.errors[key].message);
            req.flash('validationErrors', validationErrors);
            return res.redirect('/auth/login');
        }
        res.redirect('/');
    });
}