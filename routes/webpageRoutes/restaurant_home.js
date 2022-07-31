var express = require('express');
var router = express.Router();
const url = require('url');
const Pool = require('pg').Pool;
let pool = require('./../../db_config');


router.get('/:id',async function(req,res){
    let ids=req.params.id;
    var q="select name from restaurant where id = "+ids;
    const rest_name=await pool.query(q);

    res.render('Webpages/restaurant_home',{id:ids,title:rest_name.rows[0].name});


});
module.exports = router;