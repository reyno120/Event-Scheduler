// modules
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
// const expressSession = require('express-session');
// const flash = require('connect-flash');
// const cors = require('cors');

// controllers
// const registerController = require('./controllers/registerController');
// const loginController = require('./controllers/loginController');
const homeController = require('./controllers/homeController');
// const logoutController = require('./controllers/logoutController');
// const createController = require('./controllers/createController');
// const updateController = require('./controllers/updateController');
// const deleteController = require('./controllers/deleteController');

// models
const Event = require('./models/Event');
// const User = require('./models/User');

// custom middleware
// const authMiddleware = require('./middleware/authMiddleware');
// const redirectIfAuthMiddleware = require('./middleware/redirectIfAuthMiddleware');


// Connection to database
const connection = require('./config/keys');
mongoose.connect(connection.mongoURI, {useNewUrlParser: true, useUnifiedTopology: true});

// middleware
const app = express();
// app.set('view engine', 'ejs');
// app.use('/assets', express.static('assets'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
// app.use(expressSession ({
//     secret: 'vanille latte',
//     resave: true,
//     saveUninitialized: true
// }));
// app.use(flash());
// app.use(cors());


// HTTP requests handlers
// app.get('/', authMiddleware, homeController);
// const testController = require('./controllers/testController');
// app.get('/test', testController);
app.get('/home', homeController);
// app.get('/auth/login', redirectIfAuthMiddleware, (req, res) => {
//     res.render('login', {
//         errors: flash('validationErrors')
//     });
// });
// app.get('/auth/logout', logoutController);

// app.post('/users/register', redirectIfAuthMiddleware, registerController);
// app.post('/users/login', redirectIfAuthMiddleware, loginController);
// app.post('/event/create', createController);
// app.post('event/update', updateController);
// app.post('/event/delete', deleteController);

app.listen(4200);