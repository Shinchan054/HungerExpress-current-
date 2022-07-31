var express = require('express');
var router = express.Router();
const url = require('url');
const Pool = require('pg').Pool;
let pool = require('./../../db_config');


router.get('/',function(req,res){
        //const  result = await pool.query("select id from customer");
    console.log('hello login');
    res.render('Webpages/login');

        //console.log(result.rows[0].id);
    });

router.post('/', async function(req,res,next)  {
        //const  result = await pool.query("select id from customer");
    console.log('hello');
    let email;
    let pass;
    email=req.body.username;
    pass=req.body.password;

    const  result = await pool.query("select email,password,id from customer");
    for(var i=0;i < result.rows.length;i++) {
        if(result.rows[i].email==email&&result.rows[i].password==pass)
        {   res.cookie("id",result.rows[i].id);
            res.redirect("/customer/home/"+result.rows[i].id);

            break;
        }




    }
    res.render('Webpages/login');

    });
module.exports = router;