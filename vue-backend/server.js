//var routes = require('./routes/index');
var express = require('express'),
    app = express(), 
    bodyParser = require('body-parser'), 
    compression = require('compression');
 
global.config = require('./config');
global.helper = require('./controller/helper');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(compression())
global.tokenList = {} 
 
var routes = require('./route/routes');
routes(app);
app.listen(global.config.port);
console.log('server started on: ' + global.config.port);