var express = require('express');
var router = express.Router();
const url = require('url');
const Pool = require('pg').Pool;
let pool = require('./../../db_config');
const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://postgres:tanmoy@localhost:5432/HungerExpress');

var initModels = require('./../../Models/init-models');
var models = initModels(sequelize);

router.get('/:id',async function(req,res){
    let ids=req.params.id;
    //var q="select name from restaurant where id = "+ids;
    //const rest_name=await pool.query(q);
    const rest_name=await models.restaurant.findOne({
        where: {
            id: ids
        }
    });
   //var r = "select image_id from restaurant_image where restaurant_id = "+ids;
    //const rest_image=await pool.query(r);
    const rest_image=await models.restaurant_image.findOne({
        where: {
            restaurant_id: ids
        }
    });
     let url = "/images/rest"+rest_image.image_id+".png";
    let ans=await models.cart.findAll({

        where:{
            restaurant_id:req.params.id,
            order_id:null
        }
    });
    const item_name=[];
    const item_price=[];
    const item_quantity=[];
    const cust_name=[];
    for(var i=0;i<ans.length;i++) {
        let ans3 = await models.cart.findOne({
            where: {
                id: ans[i].id
            }
        });
        let ans1 = await models.customer.findOne({
            where: {
                id: ans3.customer_id
            }
        });
        cust_name.push(ans1.name);

        const item_name1 = [];
        const item_price1 = [];
        const item_quantity1 = [];

        let ans2 = await models.cart_item.findAll({
            where: {
                cart_id: ans[i].id
            }
        });
        for (var j = 0; j < ans2.length; j++) {
            let ans3 = await models.item.findOne({
                where: {
                    id: ans2[j].item_id
                }

            });
            item_name1.push(ans3.name);
            item_price1.push(ans2.total_price);
            item_quantity1.push(ans2.count);

        }
        item_name.push(item_name1);
        item_price.push(item_price1);
        item_quantity.push(item_quantity1);

    }
    console.log(item_name);

    res.render('Webpages/restaurant_home',{id:ids,title:rest_name.name , url:url,item_name:item_name,item_price:item_price,item_quantity:item_quantity,cust_name:cust_name});


});
module.exports = router;