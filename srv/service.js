const cds = require('@sap/cds');
const { parseArgs } = require('util');
module.exports = cds.service.impl(async function () {
    let {
        addition
    } = this.entities;
    // const c5re = await cds.connect.to('iflow1');
    this.on('READ', addition.drafts, async (req,next) => {
        // debugger
        if(req.data.firstnum){
        // var data1 = await SELECT.from(stud.drafts);
            const sum = req.data.firstnum + req.data.secondnum;
        console.log(req);
        await cds.update(addition.drafts)
        .set({result:sum }) // Update with new data
        .where({ firstnum : req.data.firstnum});
        
    }
        return next();

       
    });
    });