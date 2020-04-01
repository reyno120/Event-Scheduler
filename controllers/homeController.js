const Events = require('../models/Event');
const Users = require('../models/User');
const schedule = require('node-schedule');
const nodemailer = require('nodemailer');

module.exports = (req, res) => {
    Events.find({userid: req.session.userId}, (error, events) => {
        Users.find({_id: req.session.userId}, (error, users) => {
            var userEmail = users[0].email;

            let transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'eventscheduler82@gmail.com',
                    pass: 'EventScheduler@82'
                }
            });

            var jobs = [0];

            // converting to 12-hour time and adding AM/PM
            for(var i = 0; events[i] != null; i++) {
                var fullTime = events[i].eventTime;
                var eTime = events[i].eventTime;
                var hour = parseInt(eTime);

                if(hour >= 13) {    //pm
                    hour -= 12;
                    hour = hour.toString();
                    eTime = hour + eTime.substring(2) + " PM";
                    events[i].eventTime = eTime;
                }
                else if(hour == 12) {   // noon
                    events[i].eventTime = eTime + " PM";
                }
                else if(hour == 0) {    // midnight
                    hour += 12;
                    hour = hour.toString();
                    eTime = hour + eTime.substring(2) + " AM";
                    events[i].eventTime = eTime;
                }
                else {  //am
                    events[i].eventTime = eTime + " AM";
                }

                var jobDate = new Date();
                //--------------constructing-date--------------------//
                eDate = events[i].eventDate;
                //set date
                jobDate.setUTCFullYear(eDate.substring(0, 4));
                jobDate.setUTCMonth(parseInt(eDate.substring(5, 7)) - 1);
                jobDate.setUTCDate(eDate.substring(8, 10));
                // set time
                jobDate.setUTCHours(parseInt(fullTime.substring(0, 2)) + 4);
                jobDate.setUTCMinutes(fullTime.substring(3, 5))
                
                // console.log(jobDate);
                // console.log(events[i].eventName);
                //--------------------------------------------------//

                let mailOptions = {
                    from: 'eventscheduler82@gmail.com',
                    to: userEmail,
                    subject: 'Reminder for ' + events[i].eventName + '.',
                    text: 'This is a reminder for ' + events[i].eventName + ' on ' + events[i].eventDate + ' at ' + events[i].eventTime + '. Make sure to arrive at ' + events[i].eventLoc + ' on time!'
                };

                jobs[i] = schedule.scheduleJob(jobDate, function() {
                    transporter.sendMail(mailOptions, function(err, data) {
                        if (err) throw err;
                    });
                    console.log("email sent!");
                });
            }

            res.render('home', {events: events});
        });
    });
}