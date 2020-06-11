const Event = require('../models/Event');
const User = require('../models/User');
const nodemailer = require('nodemailer');
const moment = require('moment');
const CronJob = require('cron').CronJob;

needScheduling = (reminder, eventDate, todayDate) => {
    var eventIsToday = false;   // indicates if the event takes place today
    var needsScheduling = false;    // indicates if an event reminder needs to be sent out

    // This block determines if the event matches todays date
    if(eventDate.getFullYear() == todayDate.getFullYear()) {
        if(eventDate.getMonth() == todayDate.getMonth()) {
            if(eventDate.getDate() == todayDate.getDate()) {
                eventIsToday = true;
            }
        }
    }

    switch(reminder) {
        case 'At time of event':
            if(eventIsToday) needsScheduling = true;
            break;

        case '1 hour':
            if(eventIsToday) needsScheduling = true;
            break;

        case '2 hours': 
            if(eventIsToday) needsScheduling = true;
            break;

        case '1 day':
            eventDate.setDate(eventDate.getDate() - 1);
            if(eventDate.getDate() == todayDate.getDate()) needsScheduling = true;
            break;

        case '2 days':
            eventDate.setDate(eventDate.getDate() - 2);
            if(eventDate.getDate() == todayDate.getDate()) needsScheduling = true;
            break;

        case '1 week':
            eventDate.setDate(eventDate.getDate() - 7);
            if(eventDate.getDate() == todayDate.getDate()) needsScheduling = true;
            break;

        case '2 weeks':
            eventDate.setDate(eventDate.getDate() - 14);
            if(eventDate.getDate() == todayDate.getDate()) needsScheduling = true;
            break;

        default:
            return false;
    }

    return (needsScheduling);
}


scheduleJob = (reminder, date, time, userid, name, loc) => {
    User.findOne({_id: userid}, function(error, user) {
        if (error) throw error;

        date = moment(date).format('MMMM Do YYYY');

        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'eventscheduler82@gmail.com',
                pass: 'EventScheduler@82'
            }
        });
    
        let mailOptions = {
            from: 'eventscheduler82@gmail.com',
            to: user.email,
            subject: 'Reminder for ' + name + '.',
            text: 'This is a reminder for ' + name + ' on ' + date + ' at ' + time + '. Make sure to arrive at ' + loc + ' on time!'
        }

        switch(reminder) {
            case 'At time of event':
                var hour = parseInt(time.substring(0,2));
                var minute = parseInt(time.substring(3, 5));
                var job = new CronJob({
                    cronTime: '00 '+ minute +' '+ hour +' * * *',
                    onTick: function() {
                        transporter.sendMail(mailOptions, function(error, data) {
                            if (error) throw error;
                        });
                    },
                        timeZone: 'America/New_York'
                    });
                    job.start();
                break;
    
            case '1 hour':
                var hour = parseInt(time.substring(0,2)) - 1;
                var minute = parseInt(time.substring(3, 5));
                var job = new CronJob({
                    cronTime: '00 '+ minute +' '+ hour +' * * *',
                    onTick: function() {
                        transporter.sendMail(mailOptions, function(error, data) {
                            if (error) throw error;
                        });
                    },
                        timeZone: 'America/New_York'
                    });
                    job.start();
                break;
    
            case '2 hours':
                var hour = parseInt(time.substring(0,2)) - 2;
                var minute = parseInt(time.substring(3, 5));
                var job = new CronJob({
                    cronTime: '00 '+ minute +' '+ hour +' * * *',
                    onTick: function() {
                        transporter.sendMail(mailOptions, function(error, data) {
                            if (error) throw error;
                        });
                    },
                        timeZone: 'America/New_York'
                    });
                    job.start();
                break;
    
            case '1 day':
                transporter.sendMail(mailOptions, function(error, data) {
                    if (error) throw error;
                });
                break;
    
            case '2 days':
                transporter.sendMail(mailOptions, function(error, data) {
                    if (error) throw error;
                });
                break;
    
            case '1 week':
                transporter.sendMail(mailOptions, function(error, data) {
                    if (error) throw error;
                });
                break;
    
            case '2 weeks':
                transporter.sendMail(mailOptions, function(error, data) {
                    if (error) throw error;
                });
                break;
        }
    });
}


module.exports = () => {
    var date = new Date();

    Event.find({}, function(error, events) {
        if (error) throw error;
        for(var i = 0; i < events.length; i++) {    // filtering events
            const event = events[i];
            var eventDate = new Date(event.eventDate);  // create a date object out of eventDate
            eventDate.setDate(eventDate.getDate() + 1); // accounting for date offset

            // Determine if an event reminder needs to be sent out
            var doesEventNeedScheduled = needScheduling(event.eventReminder, eventDate, date);
    
            // If event has passed, delete event, otherwise, send out reminder if needed
            if(date.getTime() > eventDate.getTime()) {  
                Event.deleteOne({eventName: event.eventName, userid: event.userid}, function(error, event) {
                    if (error) throw error;
                });
            }
            else if(doesEventNeedScheduled) {
                scheduleJob(
                    event.eventReminder, 
                    eventDate, 
                    event.eventTime, 
                    event.userid, 
                    event.eventName,
                    event.eventLoc,
                );
            }
        }
    });
}