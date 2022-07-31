var express = require('express');
var router = express.Router();
const Pool = require('pg').Pool;
let pool = require('./../../db_config');

router.get('/:id', async function(req, res, next) {
    var id=req.params.id;
    var st="select name,email,current_address_id  from customer where id="+id+";";
    const  result = await pool.query(st);
    st = "select location  from customer_address where id="+result.rows[0].current_address_id+";";
    const  result1 = await pool.query(st);
    res.render('Webpages/customer_profile', {name:result.rows[0].name,email:result.rows[0].email,location:result1.rows[0].location});

});
module.exports = router;