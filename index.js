// modules
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const expressSession = require('express-session');
const flash = require('connect-flash');

// controllers
const registerController = require('./controllers/registerController');
const loginController = require('./controllers/loginController');
const homeController = require('./controllers/homeController');
const logoutController = require('./controllers/logoutController');
const createController = require('./controllers/createController');
const updateController = require('./controllers/updateController');

// models
const Event = require('./models/Event');
const User = require('./models/User');

// custom middleware
const authMiddleware = require('./middleware/authMiddleware');
const redirectIfAuthMiddleware = require('./middleware/redirectIfAuthMiddleware');


// Connection to database
mongoose.connect('mongodb+srv://jmreynolds:jmreynolds@mycluster-pjizw.mongodb.net/EventsScheduler?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});

// middleware
const app = express();
app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(expressSession ({
    secret: 'vanille latte',
    resave: true,
    saveUninitialized: true
}));
app.use(flash());


// HTTP requests handlers
app.get('/', authMiddleware, homeController);
app.get('/auth/login', redirectIfAuthMiddleware, (req, res) => {
    res.render('login', {
        errors: flash('validationErrors')
    });
});
app.get('/auth/logout', logoutController);

app.post('/users/register', redirectIfAuthMiddleware, registerController);
app.post('/users/login', redirectIfAuthMiddleware, loginController);
app.post('/event/create', createController);
app.post('event/update', updateController);

app.listen(4200);

// for debugging
process.on('unhandledRejection', (reason, p) => {
    console.log('Unhandled Rejection at: Promise', p, 'reason:', reason);
});