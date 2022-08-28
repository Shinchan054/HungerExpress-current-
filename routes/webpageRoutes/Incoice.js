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
    //console.log(id);
    let cart=await models.cart.findOne({
        where:{
            id:id

        }
    });
    //console.log(cart.Payment_info_id);
    let payment=await models.payment_info.findOne({
        where:{
            id:cart.Payment_info_id
        }
    });
    let url;
    if(payment==null)
        url=0;
    else
        url=payment.url;
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
        item_quantity.push(cart_item[i].count);
        item_subtotal.push(item.price*cart_item[i].count);
        total+=item.price*cart_item[i].count;
    } 


    let cust_id = cart.customer_id;
    let customer = await models.customer.findOne({
        where: {
            id: cust_id
        }
    });

    let cust_name = customer.name;
    let cust_email = customer.email;
    let cust_phone = customer.mobile;
    
    let rest_id = cart.restaurant_id;
    let restaurant = await models.restaurant.findOne({
        where: {
            id: rest_id
        }
    });

    let rest_name = restaurant.name;
     console.log(url);
    res.render('Webpages/Invoice',{item_name:item_name,item_price:item_price,item_quantity:item_quantity,item_subtotal:item_subtotal,total:total,cust_name:cust_name,cust_email:cust_email,cust_phone:cust_phone,cart_id:cart.order_id,rest_name:rest_name,url:url,delfee:cart.Delivery_fee});
});

module.exports = router;