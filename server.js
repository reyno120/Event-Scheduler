// Modules
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const expressSession = require('express-session');
const CronJob = require('cron').CronJob;



// Controllers
const registerController = require('./controllers/registerController');
const loginController = require('./controllers/loginController');
const homeController = require('./controllers/homeController');
const logoutController = require('./controllers/logoutController');
const createController = require('./controllers/createController');
const updateController = require('./controllers/updateController');
const deleteController = require('./controllers/deleteController');
const jobController = require('./controllers/jobController');



// Models
const Event = require('./models/Event');



// Custom middleware
const checkIfAuth = require('./middleware/checkIfAuth');



// Connection to database
const connection = require('./config/keys');
mongoose.connect(connection.mongoURI, {useNewUrlParser: true, useUnifiedTopology: true});



// Middleware
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
app.use(expressSession ({
    secret: 'vanille latte',
    resave: true,
    saveUninitialized: true,
    path: '/home'
}));



// Cron Job
var job = new CronJob({
    cronTime: '00 00 8 * * *',
    onTick: function() {
        console.log("task ran");
        var date = new Date();
        Event.find({}, jobController);

    },
    timeZone: 'America/New_York'
});
job.start();



// HTTP requests handlers
app.get('/home', checkIfAuth, homeController);
app.get('/auth/logout', logoutController);

app.post('/users/register', registerController);
app.post('/users/login', loginController);
app.post('/event/create', createController);
app.post('/event/update', updateController);
app.post('/event/delete', deleteController);

app.listen(4200);