var express = require('express');
var router = express.Router();
const url = require('url');
const Pool = require('pg').Pool;
let pool = require('./../../db_config');


router.get('/:id',async function(req,res){
    let ids=req.params.id;
    var q="select name from restaurant where id = "+ids;
    const rest_name=await pool.query(q);

   var r = "select image_id from restaurant_image where restaurant_id = "+ids;
    const rest_image=await pool.query(r);
     let url = "/images/rest"+rest_image.rows[0].image_id+".png";
    res.render('Webpages/restaurant_home',{id:ids,title:rest_name.rows[0].name , url:url});


});
module.exports = router;