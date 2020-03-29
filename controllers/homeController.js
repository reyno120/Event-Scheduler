const Events = require('../models/Event');
const schedule = require('node-schedule');

// var date = new Date(Date.now());
// var date = new Date('March 24, 2020 13:52:00');

module.exports = (req, res) => {
    Events.find({userid: req.session.userId}, (error, events) => {

        // converting to 12-hour time and adding AM/PM
        for(var i = 0; events[i] != null; i++) {
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
            jobDate.setTime(eTime);
            jobDate.setDate(events[i].eventDate);
            var j = schedule.scheduleJob(jobDate, function() {
                console.log("test-YES");
            
            });
        }

        res.render('home', {events: events});
    });
}