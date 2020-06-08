const bcrypt = require('bcrypt');
const User = require('../models/User');

module.exports = (req, res) => {
    const { loginUser, loginPass } = req.body;

    User.findOne({username:loginUser}, (error, user) => {
        var userFound = false;
        if(error) {
            res.json({userFound});
        }
        if(user) {
            bcrypt.compare(loginPass, user.password, (error, same) => {
                if(same) {  // Correct pass
                    req.session.userId = user._id;  // Setting session ID in browser to User ID stored in database
                    userFound = true;
                    res.json({userFound});
                }
                else {  // Incorrect pass
                    userFound = false;
                    res.json({userFound});
                }
            });
        }
        // If no user found
        else {
            userFound = false;
            res.json({userFound});
        }
    });
}