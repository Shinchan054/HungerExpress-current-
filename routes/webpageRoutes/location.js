const { json } = require('express');
var express = require('express');
const session = require('express-session');
var router = express.Router();
const Pool = require('pg').Pool;
let pool = require('./../../db_config');
const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://postgres:tanmoy@localhost:5432/HungerExpress');
var change=require('./../../public/changePosition');
var initModels = require('./../../Models/init-models');
var models = initModels(sequelize);
router.get('/:id', async function (req, res, next) {
    let id=req.params.id;

    let ans=await models.cart.findOne({
        where: {
            id: id
        }
    });
    let ans1=await models.customer.findOne({
        where: {
            id: ans.customer_id
        }
    });
    let ans2=await models.address.findOne({
        where: {
            id: ans1.address_id

        }
    });

    // let ans3=await models.restaurant.findOne({
    //     where: {
    //         id: ans.restaurant_id
    //     }
    // });
    // let ans4=await models.rest_address.findOne({
    //     where: {
    //         id: ans3.address_id
    //     }
    // });
    // console.log(ans2.latitude,ans2.longitude,ans4.latitude,ans4.longitude);

    let order=await models.orderr.findOne({
        where:{
            cart_id:id,
        }
    });
    let rider=await models.rider.findOne(
        {
            where:{
                id:order.rider_id
            }
        }
    );
   let rider_address=await models.rider_address.findOne({
         where:{
                id:rider.address_id
         }
   });


   change(order.id);
   //console.log(ans2.latitude,ans2.longitude,rider.latitude,rider.longitude);
    res.render('Webpages/location',{lat:ans2.latitude,lng:ans2.longitude,lat1:rider_address.latitude,lng1:rider_address.longitude});
});

module.exports = router;