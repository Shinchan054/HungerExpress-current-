var express = require('express');
var router = express.Router();
const url = require('url');
let pool = require('./../../db_config');
const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://postgres:tanmoy@localhost:5432/HungerExpress');

var initModels = require('./../../Models/init-models');
var models = initModels(sequelize);
router.get('/',function(req,res){

    res.render('Webpages/signup');
});


router.post('/', async function(req,res,next)  {
    //const  r = await pool.query("select id from customer");
    const  r = await models.customer.findAll();
    //var size=r.rows.length;

    size=300+r.length+1;
    let email;
    let pass;
    let name;

    let result=await models.customer.create({
        id: size,
        name: req.body.name,
        current_coin: 0,
        mobile: req.body.mobile,
        customer_image_id: null,
        password: req.body.password,
        email: req.body.email
    });


    //onsole.log(q);
    //const re=await pool.query(q);



    res.redirect('/customer/login');

});

module.exports = router;