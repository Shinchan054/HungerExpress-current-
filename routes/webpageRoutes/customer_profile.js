var express = require('express');
var router = express.Router();
const Pool = require('pg').Pool;
let pool = require('./../../db_config');
const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://postgres:12345@localhost:5432/HungerExpress');

var initModels = require('./../../Models/init-models');
var models = initModels(sequelize);
router.get('/:id', async function(req, res, next) {
    var id=req.params.id;
    //var st="select name,email,current_address_id  from customer where id="+id+";";
    //const  result = await pool.query(st);
    const  result = await models.customer.findOne({
        where: {
            id: id
        }
    });
    //st = "select location  from customer_address where id="+result.rows[0].current_address_id+";";
    //const  result1 = await pool.query(st);
    const  result1 = await models.customer_address.findOne({
        where: {
            id: result.current_address_id
        }
    });

    res.render('Webpages/customer_profile', {name:result.name,email:result.email,location:result1.location});
});
module.exports = router;