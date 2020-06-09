const User = require('../models/User');

module.exports = (req, res) => {
    User.create({
        username: req.body.registerUser, 
        password: req.body.registerPass, 
        email: req.body.registerEmail
    }, 
    (error, user) => {
        if(error) {
            res.json({userExists: true});
            console.log("user exists, not creating");
            console.log(error);
        }
        else {
            res.json({userExists: false});
            console.log("User created!");
        }
    });
}