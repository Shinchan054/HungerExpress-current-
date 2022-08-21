var express = require('express');
var router = express.Router();
const url = require('url');
const Pool = require('pg').Pool;
let pool = require('./../../db_config');
const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://postgres:tanmoy@localhost:5432/HungerExpress');
var assign=require('./../../public/assignRider');
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
   // const item_price=[];
    //const item_quantity=[];
    const cust_name=[];
    const cart_id=[];
    for(var i=0;i<ans.length;i++) {

        let ans3 = await models.cart.findOne({
            where: {
                id: ans[i].id
            }
        });
        cart_id.push(ans[i].id);
        let ans1 = await models.customer.findOne({
            where: {
                id: ans3.customer_id
            }
        });

        cust_name.push(ans1.name);

        //const item_name1 = [];
       // const item_price1 = [];
       // const item_quantity1 = [];

        let ans2 = await models.cart_item.findAll({
            where: {
                cart_id: ans[i].id
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
            item_name.push(s);
            // item_price.push(item_price1);
            // item_quantity.push(item_quantity1);

        }
    let anq=await models.restaurant_manager.findOne({
where:{
    restaurant_id:ids
}
    });
    let ansn=await models.orderr.findAll({
        where:{
            restaurant_manager_id:anq.id,
            status:"Confirmed"
        }
    });
    const item_name1=[];
    const cust_name1=[];
    const cart_id1=[];
    for(var i=0;i<ansn.length;i++) {

        let ans3 = await models.cart.findOne({
            where: {
                id: ansn[i].cart_id
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
        // item_price.push(item_price1);
        // item_quantity.push(item_quantity1);

    }


    res.render('Webpages/restaurant_home',{id:ids,title:rest_name.name , url:url,item_name:item_name,cust_name:cust_name,cart_id:cart_id,item_name1:item_name1,cust_name1:cust_name1,cart_id1:cart_id1});


});
router.post('/', async function(req, res, next) {

    let ans = await models.orderr.findAll();
    let l = ans.length + 1;
    let a = req.body.cart_id;
    let an = await models.cart.findOne({

        where: {
            id: a
        }
    });
    let r=an.restaurant_id;
    let c=an.customer_id;

    let an2=await models.restaurant_manager.findOne({
        where:{
            restaurant_id:r
        }
    }
    );

    let an3=await models.orderr.create({
        id:l+1000,
        restaurant_id:r,
        restaurant_manager_id:an2.id,
        cart_id: a,
        status:"Confirmed"

    }
    );
    //console.log(an3);
    let an1= await models.cart.update({
            order_id:l+1000
        },{
            where:{
                id:a
            }
        }
    );
    assign(l+1000);
});
router.post('/finish', async function(req, res, next) {
    let a = req.body.cart_id;

    let an = await models.cart.findOne({

        where: {
            id: a
        }
    });
    let r=an.restaurant_id;
    let c=an.customer_id;
    let an1= await models.orderr.update({
            status:"Finished"
    }
        ,{
            where:{
                cart_id:a
            }
        }
);






});

module.exports = router;