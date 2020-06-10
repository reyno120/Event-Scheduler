// Modules
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const expressSession = require('express-session');
const CronJob = require('cron').CronJob;
// const flash = require('connect-flash');
// const cors = require('cors');

// Controllers
const registerController = require('./controllers/registerController');
const loginController = require('./controllers/loginController');
const homeController = require('./controllers/homeController');
// const logoutController = require('./controllers/logoutController');
const createController = require('./controllers/createController');
const updateController = require('./controllers/updateController');
const deleteController = require('./controllers/deleteController');

// Models
const Event = require('./models/Event');
const User = require('./models/User');

// Custom middleware
// const authMiddleware = require('./middleware/authMiddleware');
// const redirectIfAuthMiddleware = require('./middleware/redirectIfAuthMiddleware');
const checkIfAuth = require('./middleware/checkIfAuth');


// Connection to database
const connection = require('./config/keys');
mongoose.connect(connection.mongoURI, {useNewUrlParser: true, useUnifiedTopology: true});

// Middleware
const app = express();
// app.use(cors({
//     origin: "http://localhost:4200"
// }));
// app.set('view engine', 'ejs');
// app.use('/assets', express.static('assets'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
app.use(expressSession ({
    secret: 'vanille latte',
    resave: true,
    saveUninitialized: true,
    path: '/home'
    // resave: false,
    // saveUninitialized: false
}));
// app.use(flash());
// app.use(cors());

// Cron Job
parseEventReminder = (reminder) => {
    console.log(reminder);
}

// var job = new CronJob({
//     cronTime: '00 20 10 * * *',
//     onTick: function() {
//         console.log("task ran");
//         var date = new Date();
//         Event.find({}, function(error, events) {
//             if (error) throw error;
//             for(var i = 0; i < events.length; i++) {    // filtering events
//                 console.log()
//             }
//         });

//     },
//     timeZone: 'America/New_York'
// });
// job.start();
var date = new Date();

Event.find({}, function(error, events) {
    if (error) throw error;
    for(var i = 0; i < events.length; i++) {    // filtering events
        var event = events[i];
        var eventReminder = parseEventReminder(event.eventReminder);
        var eventDate = new Date(event.eventDate)

        if(date.getTime() > eventDate.getTime()) {  // if event has passed, delete event
            Event.deleteOne({event}, function(error, event) {
                if (error) throw error;
            });
        }
        // else if()
    }
});

// HTTP requests handlers
// app.get('/', authMiddleware, homeController);
app.get('/home', checkIfAuth, homeController);
// app.get('/auth/login', redirectIfAuthMiddleware, (req, res) => {
//     res.render('login', {
//         errors: flash('validationErrors')
//     });
// });
// app.get('/auth/logout', logoutController);
// app.get('auth/login', (req, res) => {
//     res.send(true);
// })

// app.post('/users/register', redirectIfAuthMiddleware, registerController);
// app.post('/users/login', redirectIfAuthMiddleware, loginController);
app.post('/users/register', registerController);
app.post('/users/login', loginController);
app.post('/event/create', createController);
app.post('/event/update', updateController);
app.post('/event/delete', deleteController);

app.listen(4200);