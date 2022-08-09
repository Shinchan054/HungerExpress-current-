const { json } = require('express');
var express = require('express');
const session = require('express-session');
var router = express.Router();
const Pool = require('pg').Pool;
let pool = require('./../../db_config');
const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://postgres:tanmoy@localhost:5432/HungerExpress');

var initModels = require('./../../Models/init-models');
var models = initModels(sequelize);
router.get('/:id', async function (req, res, next) {
let ans=await models.cart.findAll({

    where:{
        restaurant_id:req.params.id,
        order_id:null
    }
});
//now send the data to the frontend




});
router.post('/', async function (req, res, next) {
let ans=await models.orderr.findAll();
let l=ans.length;
let cr=await models.orderr.create({
    order_id:l+1,
    cart_id:req.body.cart_id,
    restaurant_manager_id:req.body.restaurant_manager_id,

   //order_status:"pending",
    //order_date:new Date(),
    //order_time:new Date(),
    order_total:req.body.order_total
});
});





module.exports = router;