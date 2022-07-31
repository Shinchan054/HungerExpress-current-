var express = require('express');
var router = express.Router();
const url = require('url');
const Pool = require('pg').Pool;
let pool = require('./../../db_config');


router.get('/',function(req,res){

    res.render('Webpages/rest_login');

    //console.log(result.rows[0].id);
});

router.post('/', async function(req,res,next)  {
    let email;
    let pass;
    email=req.body.email;
    pass=req.body.password;
    console.log(email,pass);
    const  result = await pool.query("select email,password,restaurant_id from restaurant_manager");
    for(var i=0;i < result.rows.length;i++) {
        if(result.rows[i].email==email&&result.rows[i].password==pass)
        {
           console.log('Hello');
            res.redirect("/restaurant/home/"+result.rows[i].restaurant_id);

            break;
        }




    }
    res.render('Webpages/rest_login');

});
module.exports = router;