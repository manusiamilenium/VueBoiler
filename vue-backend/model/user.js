"use strict";

var connection = require('../connection');
var helper = require('./helper');

exports.getUsers = async function (fields,onSuccess, onError) {
    await connection.query('SELECT * FROM user', async (error, results) => {
        return await helper.handleResult(error, results, onSuccess, onError)
    });
};
exports.getUser = async function(fields,callback) {
    await connection.query('SELECT * FROM user where username = ? ',fields, callback);
};
exports.addUser = async function(fields,callback) {
    await connection.query('INSERT INTO user (username, password,id_satwil,id_subdit) values (?,?,?,?)',fields,callback);
};
exports.editUser = async function(fields,callback) {
    await connection.query('UPDATE user SET username = ?, password = ?, id_satwil = ?, id_subdit = ? WHERE id_user = ?',fields,callback);
};
exports.deleteUser = async function(fields,callback) {
    await connection.query('DELETE user person WHERE id_user = ?',fields,callback);
};
 