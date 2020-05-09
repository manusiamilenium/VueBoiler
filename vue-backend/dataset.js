'use strict';
//result set for jquery datables
exports.ok = function (values, res) {
    var data = {
        'status': 200, 
        'data': values["data"],
    };
    //console.log(data);
    res.json(data);
    res.end();
};