'use strict';
var cookieParser = require('cookie-parser'),
    session = require('express-session'),
    MySQLStore = require('express-mysql-session')(session);

var options = {
    host: global.config.mysql.host,
    user: global.config.mysql.user,
    password: global.config.mysql.password,
    database: global.config.mysql.database
};

var sessionStore = new MySQLStore(options);
module.exports = function (app) {
    
    // initialize cookie-parser to allow us access the cookies stored in the browser. 
    app.use(cookieParser());
    // initialize express-session to allow us track the logged-in user across sessions.
    app.use(session({
        key: 'user_id',
        secret: 'bumiitubulat',
        resave: false,
        saveUninitialized: false,
        store: sessionStore,
        cookie: {
            expires: 6000000
        } 
    }));
    // This middleware will check if user's cookie is still saved in browser and user is not set, then automatically log the user out.
    // This usually happens when you stop your express server after login, your cookie still remains saved in the browser.
    app.use((req, res, next) => {
        if (req.cookies.user_sid && !req.session.user) {
            res.clearCookie('user_id');
        }
        next();
    }); 
    // middleware function to check for logged-in users
    var sessionChecker = (req, res, next) => {
        if (req.session.user && req.cookies.user_id) {
            next();
        } else {
            res.redirect('/login');
        }
    };

    // route for user logout
    app.get('/logout', (req, res) => {
        if (req.session.user && req.cookies.user_sid) {
            res.clearCookie('user_id');
            res.redirect('/');
        } else {
            res.redirect('/login');
        }
    });

    app.use((req, res, next) => {
        res.locals.session = req.session
        next()
    })
    
    let users = require('./users'); 

    users(app, sessionChecker); 
};