const bcrypt = require('bcrypt');
const User = require('../models/User');

module.exports = (req, res) => {
    const { loginUser, loginPass } = req.body;

    User.findOne({username:loginUser}, (error, user) => {
        var userFound = false;
        if(error) { // maybe???
            // const validationErrors = Object.keys(error.errors).map(key => error.errors[key].message);
            // req.flash('validationErrors', validationErrors);
            // return res.redirect('/auth/login');
            res.send(userFound);
        }
        if(user) {
            bcrypt.compare(loginPass, user.password, (error, same) => {
                if(same) {
                    req.session.userId = user._id;
                    // res.redirect('/');  // needs to fix for validation
                    userFound = true;
                    // res.setHeader('Content-Type', 'users/login');
                    console.log("User found, sending back response");
                    res.send({userFound: true});
                }
                else {
                    // res.redirect('/auth/login');    // does this need changed?
                    res.send(userFound);
                }
            });
        }
    });
}