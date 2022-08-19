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

    res.render('Webpages/rest_login');


});

router.post('/', async function(req,res,next)  {
    let email;
    let pass;
    email=req.body.email;
    pass=req.body.password;
    let result=await models.restaurant_manager.findOne({
        where: {
            email: email,
            password: pass
        }
    });
    if(result!=null)
    {

        res.redirect("/restaurant/home/"+result.restaurant_id);


    }
    res.render('Webpages/rest_login');

});
module.exports = router;