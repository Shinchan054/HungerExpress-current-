const { json } = require('express');
var express = require('express');
const session = require('express-session');
var router = express.Router();
const Pool = require('pg').Pool;
let pool = require('./../../db_config');
const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://postgres:12345@localhost:5432/HungerExpress');
var initModels = require('./../../Models/init-models');
const { Session } = require('express-session');
var models = initModels(sequelize);
router.get('/:id', async function (req, res, next) {
let id=req.params.id;

let ans=await models.cart.findOne({
    where: {
        id: id
    }
});
console.log(ans);

if(ans.order_id==null){
    let url = '/images/received.gif';
    res.render('Webpages/OrderPage',{title:"Your order has been placed" , url:url,id:id});

}
else
{
    let ans1=await models.orderr.findOne({
        where: {
            id: ans.order_id
        }
    });
    console.log(ans1);
    if(ans1.status=="Confirmed") {
         req.session.cart = null;
         let url = '/images/cooking.gif';
        res.render('Webpages/OrderPage', {title: "Restaurent is preparing your food", url: url,id:id});
    }
    if(ans1.status=='Picked Up')
    {
        let url = '/images/cooking.gif';
        res.render('Webpages/OrderPage', {title: "Rider Picked your order", url: url,id:id});
    }
}
});




module.exports = router;