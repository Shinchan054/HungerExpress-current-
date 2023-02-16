var express = require('express');
var router = express.Router();
const url = require('url');
const Pool = require('pg').Pool;
let pool = require('./../../db_config');
const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://postgres:tanmoy@localhost:5432/HungerExpress');

var initModels = require('./../../Models/init-models');
var models = initModels(sequelize);

router.get('/',function(req,res){

    //console.log('hello login');
    res.render('Webpages/login');


    });

router.post('/', async function(req,res,next)  {


    let email;
    let pass;
    email=req.body.username;
    pass=req.body.password;
    email.replace(/[^\w\s@.]/gi, '');
    pass.replace(/[^\w\s@.]/gi, '');
    let result=await models.customer.findOne({
        where: {

            email: email,
            password: pass
        }
    });
    //console.log(result);


        if(result!=null)
        {   res.cookie("cust_id",result.id);
            res.redirect("/customer/home");


        }
    res.render('Webpages/login');
    });
module.exports = router;