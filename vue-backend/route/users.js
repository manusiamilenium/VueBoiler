'use strict';
let  user  = require('../controller/user');
module.exports = function (app,sessionChecker) { 
     
    app.route('/users')
        .get(user.fetchUsers);
};
