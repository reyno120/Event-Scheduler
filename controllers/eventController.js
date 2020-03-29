var bodyParser = require('body-parser');
var mongoose = require('mongoose');


// Connect to database
mongoose.connect('mongodb+srv://jmreynolds:jmreynolds@mycluster-pjizw.mongodb.net/EventsData?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});

// Schema
var eventSchema = new mongoose.Schema({ 
    "eventName": { type: String },
    "eventDesc": { type: String },
    "eventDate": { type: Date },
    "eventTime": { type: String },
    "eventLoc": { type: String },
    "eventReminder": { type: String },
    "oldEventName": { type: String }
    //"cardNumber": { type: String }
});

var Events = mongoose.model('Events', eventSchema);

var urlencodedParser = bodyParser.urlencoded({extended: true});


module.exports = function(app) {
    
    app.get('/', function(req, res) {
        Events.find({}, function(err, events) {
            if(err) throw err;
            res.render('scheduler', {events: events});
        });
    });

    app.post('/', urlencodedParser, function(req, res) {
        var newEvent = new Events(req.body);
        console.log(req.body);
        newEvent.save();
        res.json(newEvent);
    });
};