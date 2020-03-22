const Event = require('../models/Event');

// module.exports = (req, res) => {
//     Event.create({
//         ...req.body, 
//         userid: req.session.userId
//     });
//     res.redirect('/');
// }

// Event.find({
//     eventName: req.params.eventName
// }, function (err, event) {
//     if (err) throw err;
//     if(!event) {
//         module.exports = (req, res) => {
//             Event.create({
//                 ...req.body, 
//                 userid: req.session.userId
//         });
//         res.redirect('/');
//         }
//     } 
//     else {
//         module.exports = (req, res) => {
//             Event.updateOne({
//                 ...req.body
//             });
//         }
//     }
// });

/*module.exports = (req, res) => {
    Event.findOne({
        cardNumber: req.body.cardNumber,
        userid: req.session.userId
    }, function (err, event) {
        if (err) throw err;
        console.log(event);
        if(event == null) {       // need to figure this out, !event and this dont work
            Event.create({
                ...req.body,
                userid: req.session.userId
            });
            console.log("create success!");
            res.redirect('/');
        }
        else {
            Event.updateOne({
                cardNumber: req.body.cardNumber,
                userid: req.session.userId 
            },
                {
                eventName: req.body.eventName,
                eventDate: req.body.eventDate,
                eventLoc: req.body.eventLoc,
                eventTime: req.body.eventTime,
                eventDesc: req.body.eventDesc,
                eventReminder: req.body.eventReminder
            });
            console.log(req.body.eventName);        // it is finding event (i think) but not actually updating it
            console.log("update success!");
            res.redirect('/');
        }
    });
}*/


module.exports = (req, res) => {
    Event.updateOne({
        cardNumber: req.body.cardNumber,
        userid: req.session.userId 
    },
        {$set: {
        eventName: req.body.eventName,
        eventDate: req.body.eventDate,
        eventLoc: req.body.eventLoc,
        eventTime: req.body.eventTime,
        eventDesc: req.body.eventDesc,
        eventReminder: req.body.eventReminder,
        cardNumber: req.body.cardNumber,
        userid: req.session.userId 
        }
    },
    {
        upsert: true
    },
    function(err, event) {
        return res.redirect('/');
    });
}