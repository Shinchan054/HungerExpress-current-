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
    let id=req.params.id;
    let cart=await models.cart.findOne({
        where:{
            id:id

        }
    });
    let cart_item=await models.cart_item.findAll({
        where:{
            cart_id:id
        }
    });
    const item_name=[];
    const item_price=[];
    const item_quantity=[];
    const item_subtotal=[];
    let total=0;
    for(let i=0;i<cart_item.length;i++){
        let item=await models.item.findOne({
            where:{
                id:cart_item[i].item_id
            }
        });
        item_name.push(item.name);
        item_price.push(item.price);
        item_quantity.push(cart_item[i].quantity);
        item_subtotal.push(item.price*cart_item[i].quantity);
        total+=item.price*cart_item[i].quantity;
    }

    res.render('Webpages/Invoice',{item_name:item_name,item_price:item_price,item_quantity:item_quantity,item_subtotal:item_subtotal,total:total});
});

module.exports = router;