var express = require('express');
var router = express.Router();
const url = require('url');
const Pool = require('pg').Pool;
let pool = require('./../../db_config');
const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://postgres:12345@localhost:5432/HungerExpress');

var initModels = require('./../../Models/init-models');
var models = initModels(sequelize);

router.get('/:id',async function(req,res){
    let ids=req.params.id;
    //var q="select name from restaurant where id = "+ids;
    //const rest_name=await pool.query(q);

    const item_name1=[];
    const cust_name1=[];
    const cart_id1=[];
    const time=[];
    let ansn=await models.cart.findAll({
        where:{
            customer_id:ids,
        }
    });

    for(var i=0;i<ansn.length;i++) {

        let orrr = await models.orderr.findOne({
            where: {
                cart_id: ansn[i].id,
                status: 'Delivered'
            }
        });
        if(orrr==null)
            continue;
        time.push(orrr.Delivery_time);

        let ans3 = await models.cart.findOne({
            where: {
                id: ansn[i].id
            }
        });

        cart_id1.push(ansn[i].cart_id);
        console.log(ans3);
        let ans1 = await models.customer.findOne({
            where: {
                id: ans3.customer_id
            }
        });

        cust_name1.push(ans1.name);

        //const item_name1 = [];
        // const item_price1 = [];
        // const item_quantity1 = [];

        let ans2 = await models.cart_item.findAll({
            where: {
                cart_id: ansn[i].id
            }
        });

        let s="";
        for (var j = 0; j < ans2.length; j++) {
            let ans3 = await models.item.findOne({
                where: {
                    id: ans2[j].item_id
                }

            });
            //item_name1.push(ans3.name);
            //item_price1.push(ans2.total_price);
            //item_quantity1.push(ans2.count);
            s=s+" "+ans3.name+" - count:"+ans2[j].count;


        }
        item_name1.push(s);


    }

    res.render('Webpages/customer_finish',{id:ids,title:"Customer Order" ,item_name1:item_name1,cust_name1:cust_name1,cart_id1:cart_id1,time:time});


});



module.exports = router;