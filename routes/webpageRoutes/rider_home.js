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

    const rider=await models.rider.findOne({
        where: {
            id: ids
        }
    });

    const item_name=[];
    const cust_name=[];
    const cart_id=[];
    let or=await models.TempRider.findAll({
        where:{
            rider_id:ids
        }
    });
    for(let i=0;i<or.length;i++) {
        let order = await models.orderr.findOne({
            where: {
                id: or[i].order_id,
                status: 'Confirmed'
            }
        });
        if(order==null)
            continue;
            let ans = await models.cart.findOne({
                where: {
                    id: order.cart_id
                }
            });
            let ans3 = await models.cart.findOne({
                where: {
                    id: ans.id
                }
            });
            cart_id.push(ans.id);
            let ans1 = await models.customer.findOne({
                where: {
                    id: ans3.customer_id
                }
            });

            cust_name.push(ans1.name);


            let ans2 = await models.cart_item.findAll({
                where: {
                    cart_id: ans.id
                }
            });

            let s = "";
            for (var j = 0; j < ans2.length; j++) {
                let ans3 = await models.item.findOne({
                    where: {
                        id: ans2[j].item_id
                    }

                });

                s = s + " " + ans3.name + " - count:" + ans2[j].count;


            }
            item_name.push(s);


        }
    const item_name2=[];
    const cust_name2=[];
    const cart_id2=[];
    let order2=await models.orderr.findAll({
        where:{
            rider_id:ids,
            status:"Finished"
        }
    });
    for(var i=0;i<order2.length;i++) {
        let ans=await models.cart.findOne({
            where: {
                id: order2[i].cart_id
            }
        });
        let ans3 = await models.cart.findOne({
            where: {
                id: ans.id
            }
        });
        cart_id2.push(ans.id);
        let ans1 = await models.customer.findOne({
            where: {
                id: ans3.customer_id
            }
        });

        cust_name2.push(ans1.name);


        let ans2 = await models.cart_item.findAll({
            where: {
                cart_id: ans.id
            }
        });

        let s="";
        for (var j = 0; j < ans2.length; j++) {
            let ans3 = await models.item.findOne({
                where: {
                    id: ans2[j].item_id
                }

            });

            s=s+" "+ans3.name+" - count:"+ans2[j].count;


        }
        item_name2.push(s);


    }



    const item_name1=[];
    const cust_name1=[];
    const cart_id1=[];
    const mobile=[];
    let order1=await models.orderr.findAll({
        where:{
            rider_id:ids,
            status:"Picked Up"
        }
    });
    for(var i=0;i<order1.length;i++) {
        let ans=await models.cart.findOne({
            where: {
                id: order1[i].cart_id
            }
        });
        let ans3 = await models.cart.findOne({
            where: {
                id: ans.id
            }
        });
        cart_id1.push(ans.id);
        let ans1 = await models.customer.findOne({
            where: {
                id: ans3.customer_id
            }
        });

        cust_name1.push(ans1.name);
        mobile.push(ans1.mobile);

        let ans2 = await models.cart_item.findAll({
            where: {
                cart_id: ans.id
            }
        });

        let s="";
        for (var j = 0; j < ans2.length; j++) {
            let ans3 = await models.item.findOne({
                where: {
                    id: ans2[j].item_id
                }

            });

            s=s+" "+ans3.name+" - count:"+ans2[j].count;


        }
        item_name1.push(s);


    }


    res.render('Webpages/rider_home',{id:ids,title:rider.name ,item_name:item_name,cust_name:cust_name,cart_id:cart_id,item_name1:item_name1,cust_name1:cust_name1,cart_id1:cart_id1,mobile:mobile,item_name2:item_name2,cust_name2:cust_name2,cart_id2:cart_id2});


});
router.post('/',async function(req,res) {
    let cart_id = req.body.cart_id;
    let rider_id = req.body.rider_id;
    let order = await models.orderr.findOne({

        where: {
            cart_id: cart_id,

        }
    });
    if (order.status == "Assigned")  {
    console.log("Already asigned");

}
    else {
        let check = await models.orderr.update({
                status: "Assigned",
                rider_id: rider_id
            }
            , {
                where: {
                    id: order.id

                }
            });
        let restaurant = await models.restaurant.findOne({
            where: {
                restaurant_manager_id: order.restaurant_manager_id
            }
        });
        let rest_address = await models.rest_address.findOne({
            where: {
                id: restaurant.address_id
            }
        });
        let rider = await models.rider.findOne({
            where: {
                id: rider_id
            }
        });
        let rider_address = await models.rider_address.findOne({
           where:{
               id:rider.address_id
           }
        });
        let update_Rider_address= await models.rider_address.update({
            latitude:rest_address.latitude,
            longitude:rest_address.longitude
        },{
            where:{
                id:rider.address_id

            }
        });
        let ans = await models.TempRider.destroy({
            where: {
                order_id: order.id
            }
        });
    }
}
);
router.post('/delivered',async function(req,res) {
        let cart_id=req.body.cart_id;
        let order = await models.orderr.findOne({

            where: {
                cart_id:cart_id,

            }});
        let cart = await models.cart.findOne({
            where: {
                id: cart_id
            }
        });
        //console.log(new Date().toLocaleString().slice(0, 19).replace('T', ' '));
        let check=await models.orderr.update({
                status:"Delivered",
                //Delivery_time:Sequelize.fn('now')
                Delivery_time:new Date().toLocaleString().slice(0, 19).replace('T', ' ')

            }
            ,{
                where:{
                    id:order.id

                }
            });

        let ans =await models.Massage.destroy({
            where:{
                rider_id:order.rider_id,
                customer_id:cart.customer_id
            }
        });

    }
);

router.post('/Picked',async function(req,res) {
        let cart_id=req.body.cart_id;
        console.log("hereeeeee");
        let order = await models.orderr.findOne({

            where: {
                cart_id:cart_id,

            }});
        let cart = await models.cart.findOne({
            where: {
                id: cart_id
            }
        });
        //console.log(new Date().toLocaleString().slice(0, 19).replace('T', ' '));
        let check=await models.orderr.update({
                status:"Picked Up",
                //Delivery_time:Sequelize.fn('now')


            }
            ,{
                where:{
                    id:order.id

                }
            });

        let ans =await models.Massage.destroy({
            where:{
                rider_id:order.rider_id,
                customer_id:cart.customer_id
            }
        });

    }
);
router.post('/rejected',async function(req,res) {

    let cart_id=req.body.cart_id;
    let order = await models.orderr.findOne({
        where: {
            cart_id:cart_id,

        }});

    let ans = await models.TempRider.destroy({
        where: {
            order_id: order.id,
            rider_id:req.body.rider_id
        }
    });

});
    module.exports = router;