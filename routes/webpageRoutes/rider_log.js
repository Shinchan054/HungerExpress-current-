var express = require('express');
var router = express.Router();
const url = require('url');
const Pool = require('pg').Pool;
let pool = require('./../../db_config');
const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://postgres:12345@localhost:5432/HungerExpress');

var initModels = require('./../../Models/init-models');
var models = initModels(sequelize);

router.get('/',function(req,res){


    res.render('Webpages/rider_log');


});

router.post('/', async function(req,res,next)  {


    let email;
    let pass;
    email=req.body.username;
    pass=req.body.password;
    let result=await models.rider.findOne({
        where: {

            email: email,
            password: pass
        }
    });


    if(result!=null)
    {   res.cookie("rider_id",result.id);
        res.redirect("/rider/home/"+result.id);

    }
    res.render('Webpages/rider_log');
});
module.exports = router;