var bodyParser = require('body-parser');
var mongoose = require('mongoose');


// Connect to database
mongoose.connect('mongodb+srv://jmreynolds:jmreynolds@mycluster-pjizw.mongodb.net/EventsData?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});

// Schema
var eventSchema = new mongoose.Schema({ 
    "eventName": { type: String },
    "eventDesc": { type: String },
    "eventDate": { type: String },
    "eventTime": { type: String },
    "eventLoc": { type: String },
    "eventReminder": { type: String },
    "cardNumber": { type: String }
});

var Events = mongoose.model('Events', eventSchema);

var urlencodedParser = bodyParser.urlencoded({extended: true});


module.exports = function(app) {
    
    app.get('/', function(req, res) {
        Events.find({}, function(err, events) {
            if(err) throw err;
            res.render('scheduler', {events: events});
        });
        // Events.findOne({ "cardNumber" : "card one" }, function(err, eventy) {
        //     if(err) throw err;
        //     console.log(eventy);
        // });
        // Events.find({"eventName"}[1], function(err, eventyName) {
        //     if(err) throw err;
        //     console.log("event Name" + eventyName);
        // });
    });

    app.post('/', urlencodedParser, function(req, res) {
        var newEvent = new Events(req.body);
        console.log(req.body);
        newEvent.save();
        res.json(newEvent);
    });

    /*app.delete('/:event', function(req, res) {
        Events.find({event: req.params.item.replace(/\-/g, " ")}).remove(function(err, data) {
            if(err) throw err;
            res.json(data);
        });
    });*/
};