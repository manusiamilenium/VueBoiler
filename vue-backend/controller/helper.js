'use strict';
module.exports = {
    
    processDatatable: (req,res,model,f) => {

        var response = require('../../dataset');
        const params = req.query;
        const start = params.start;
        const pagelength = params.length;
        const order = params.order[0];
        const search = params.search;
        const draw = params.draw;
        //get total count
        let data = [];
        data['draw'] = draw;
        f=f==undefined?[req.session.user.id_user]:f;
        const onErrorData = async (error) => {
            console.log(error);
        }
        const onSuccessData = async (results) => {
            data['data'] = results.map((item) => Object.values(item))
            response.ok(data, res); 
        }
        const onErrorTotal = async (error) => {
            console.log(error);
        }
        const onSuccessTotal = async (rows) => {
             
            const total = rows[0].TOTAL;
            data['recordsTotal'] = total;
            data["recordsFiltered"] = total;
            model.fetchData(f,  onSuccessData, onErrorData, req.session.user.role, start, pagelength, search.value, order);
        }

        model.getTotal(f, onSuccessTotal, onErrorTotal, req.session.user.role);

    },
}