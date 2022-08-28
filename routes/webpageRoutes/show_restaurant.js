var express = require('express');
var router = express.Router();
const url = require('url');
let pool = require('./../../db_config');
const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://postgres:tanmoy@localhost:5432/HungerExpress');

var initModels = require('./../../Models/init-models');
var models = initModels(sequelize);
router.get('/:id',async function(req,res){
    let item=[];
    let category=[];
    let img=[];
    var id=req.params.id;
    let cust_id=req.cookies.cust_id;
    let rest_closed=1;
    res.cookie("cust_rest_id",id);


    const rest_name=await models.restaurant.findOne({
        where:{
            id:id
        }
    });


    const result=await models.category.findAll({
        where:{
            restaurant_id:id
        }
    });

    const rest_img=await models.restaurant_image.findOne({
        where:{
            restaurant_id:id
        }
    });


    for(var i=0;i < result.length;i++) {

        const result1=await models.item_category.findAll({
            where:{
                category_id:result[i].id
            }
        });
        let time=new Date().getHours()+1;
        let time1=new Date().getMinutes();
        if(time==result[i].end_time&&time1>0)
            continue;
        if(time>=result[i].start_time && time<=result[i].end_time) {
            category.push(result[i].name);

            let a = [];
            let im = [];
            for (var j = 0; j < result1.length; j++) {


                const result2 = await models.item.findOne({
                    where: {
                        id: result1[j].item_id
                    }
                });


                if (result2.avail == 1) {
                    rest_closed = 0;
                    const result3 = await models.item_image.findOne({
                        where: {
                            item_id: result1[j].item_id
                        }
                    });

                    a.push(result2);
                    im.push(result3.image_id);


                }
            }

            item.push(a);
            img.push(im);
        }
    }

    let massage="open";
    if(rest_closed == 1){
         massage = "Restaurant is Closed";
    }

    const img_url = "/images/rest"+rest_img.image_id+".png";
    res.render('Webpages/show_restaurants',{
        rest_id:id,
        cid : cust_id,
        title:rest_name.name
        ,item : item,
        img:img,
        cat:category,
        url : img_url,
        rest_id:id,
        message : massage
    });
});



module.exports = router;