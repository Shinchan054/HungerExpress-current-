var express = require('express');
var router = express.Router();
const url = require('url');
let pool = require('./../../db_config');

router.get('/',function(req,res){

    res.render('Webpages/signup');
});


router.post('/', async function(req,res,next)  {
    const  r = await pool.query("select id from customer");
    var size=r.rows.length;
    size=300+size+1;
    let email;
    let pass;
    let name;

    let q="INSERT INTO customer(id, name, current_coin, current_address_id, customer_image_id, password, email)" +
        "VALUES" +"("+size+",'"+req.body.name+"',"+0+","+135+","+null+","+req.body.password+",'"+req.body.email+"');";
    console.log(q);
    const re=await pool.query(q);



    res.redirect('/customer/login');

});

module.exports = router;