'use strict';

const model = require('../model/user');
//import { validateLogin, validateChangePass } from '../validator/user.js';
//import helper from './helper';
const response = require('../dataset');
exports.fetchUsers = async (req, res) =>  { 
    //helper.processDatatable(req,res,model); 
    let data = {}
    const onError = async (error) => {
        console.log(error);
    }
    const onSuccess = async (results) => {
        data['data'] = results.map((item) => Object.values(item))
        response.ok(await data, res); 
    }
    await model.getUsers([],onSuccess,onError);
    

    
};