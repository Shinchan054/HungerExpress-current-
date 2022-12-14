var express = require('express');
var router = express.Router();
const url = require('url');

const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://postgres:tanmoy@localhost:5432/HungerExpress');

var initModels = require('./../../Models/init-models');
var models = initModels(sequelize);

router.get('/:id',async function(req,res){
    let id=req.params.id;
    res.cookie("rcart_id",id);

    let cart=await models.cart.findOne({
        where:{
            id:id
        }
    });
    let order=await models.orderr.findOne({
        where:{
            cart_id:id
        }
    });
    let cust=await models.customer.findOne({
        where:{
            id:cart.customer_id,
        }
    });
    let rider=await models.rider.findOne({
        where:{
            id:order.rider_id,
        }
    });
    let msg=await models.Massage.findAll({
        where:{
            customer_id:cust.id,
            rider_id:rider.id,
        }
    });
    let cm=[];
    let rm=[];
    for(var i=0;i<msg.length;i++){

        cm.push(msg[i].Cust_msg);
        rm.push(msg[i].Rider_msg);
    }
    res.render('Webpages/rider_msg',{cm:cm,rm:rm,customer_name:cust.name,rider_name:"me"});

});
router.post('/',async function(req,res){
    let id=req.cookies.rcart_id;
    let cart=await models.cart.findOne({
        where:{
            id:id
        }
    });
    let order=await models.orderr.findOne({
        where:{
            cart_id:id
        }
    });

    let cust=await models.customer.findOne({
        where:{
            id:cart.customer_id,
        }
    });
    let rider=await models.rider.findOne({
        where:{
            id:order.rider_id,
        }
    });
    let m=await models.Massage.findAll();
    let l=m.length;
    let msg=await models.Massage.create({
        id:l+1,
        Rider_msg:req.body.msg,
        Cust_msg:"",
        customer_id:cust.id,
        rider_id:rider.id,
    });
    res.redirect('/rider/msg/'+id);
});

module.exports = router;