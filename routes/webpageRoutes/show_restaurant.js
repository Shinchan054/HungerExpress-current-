var express = require('express');
var router = express.Router();
const url = require('url');
let pool = require('./../../db_config');
const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://postgres:12345@localhost:5432/HungerExpress');

var initModels = require('./../../Models/init-models');
var models = initModels(sequelize);
router.get('/:id',async function(req,res){
    let item=[];
    let category=[];
    let img=[];
    var id=req.params.id;
    let cust_id=req.cookies.cust_id;



    const rest_name=await models.restaurant.findOne({
        where:{
            id:id
        }
    });

    //var q="select id,name from category where restaurant_id = "+id;

    //const result=await pool.query(q);
    const result=await models.category.findAll({
        where:{
            restaurant_id:id
        }
    });
    //var r = "select image_id from restaurant_image where restaurant_id = "+id;
    //const rest_img=await pool.query(r);
    const rest_img=await models.restaurant_image.findOne({
        where:{
            restaurant_id:id
        }
    });

    //console.log(result.rows);
    for(var i=0;i < result.length;i++) {
        //var q1="select item_id from item_category where category_id = "+result.rows[i].id;
        //const result1 = await pool.query(q1);
        const result1=await models.item_category.findAll({
            where:{
                category_id:result[i].id
            }
        });
        category.push(result[i].name);
        //console.log(result1.rows);
        let a=[];
        let im=[];
        for(var j=0;j < result1.length;j++) {

            //var q2 = "select name,description,price,id,avail  from item where id = " + result1[j].item_id;

            //const result2 = await pool.query(q2);
            const result2=await models.item.findOne({
                where:{
                    id:result1[j].item_id
                }
            });

            //console.log(result2.rows);
            if (result2.avail == 1) {
                //var q2 = "select  image_id  from item_image where item_id = " + result1[j].item_id;
                //console.log(q2);

                //const result3 = await pool.query(q2);
                const result3=await models.item_image.findOne({
                    where:{
                        item_id:result1[j].item_id
                    }
                });

                a.push(result2);
                im.push(result3.image_id);
                //console.log(result2.id);

            }
        }
        item.push(a);
        img.push(im);
    }
    //console.log(item);
    const img_url = "/images/rest"+rest_img.image_id+".png";
    res.render('Webpages/show_restaurants',{
        rest_id:id,
        cid : cust_id,
        title:rest_name.name
        ,item : item,
        img:img,
        cat:category,
        url : img_url,
        rest_id:id
    });
});



module.exports = router;