const { json } = require('express');
var express = require('express');
const session = require('express-session');
var router = express.Router();
const Pool = require('pg').Pool;
let pool = require('./../../db_config');
const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://postgres:tanmoy@localhost:5432/HungerExpress');
var initModels = require('./../../Models/init-models');
const { Session } = require('express-session');
var CalculateEta=require('./../../public/ETA');
var change=require('./../../public/changePosition');
var models = initModels(sequelize);
router.get('/:id', async function (req, res, next) {
let id=req.params.id;

let ans=await models.cart.findOne({
    where: {
        id: id
    }
});


if(ans.order_id==null){
    let url = '/images/received.gif';
    res.render('Webpages/OrderPage',{title:"Your order has been placed" , url:url,id:id,eta:0,mob:0,status:'Pending'});

}
else
{
    let ans1=await models.orderr.findOne({
        where: {
            id: ans.order_id
        }
    });

    if(ans1.status=="Confirmed") {
         req.session.cart = null;

         let eta=await CalculateEta(ans1.cart_id);
         eta=Math.round(eta);
        let rider=await models.rider.findOne({
           where: {
               id:ans1.rider_id
           }
        });
         let url = '/images/cooking.gif';
        res.render('Webpages/OrderPage', {title: "Restaurent is preparing your food", url: url,id:id,eta:eta,mob:0,status:ans1.status});
    }
    else if(ans1.status=="Finished"){

        let url = '/images/Finished.gif';

        let eta=await CalculateEta(ans1.cart_id);
        eta=Math.round(eta);

        res.render('Webpages/OrderPage', {title: "Your food is ready", url: url,id:id,eta:eta,mob:0,status:ans1.status});
    }
    else if(ans1.status=='Picked Up')
    {
        let url = '/images/rider.gif';

        let rider=await models.rider.findOne({
            where: {
                id:ans1.rider_id
            }
        });
        let eta=await CalculateEta(ans1.cart_id);
        eta=Math.round(eta);
        change(ans1.id);

        res.render('Webpages/OrderPage', {title: "Rider Picked your order.Your food is on the way.", url: url,id:id,eta:eta,mob :rider.mobile,status:ans1.status});
    }

    else if(ans1.status=='Delivered')
    {
        let url = '/images/delivered.gif';
        res.render('Webpages/OrderPage', {title: "Your Food has been delivered.", url: url,id:id,eta:0,mob:0,status:ans1.status});
    }
}
});




module.exports = router;