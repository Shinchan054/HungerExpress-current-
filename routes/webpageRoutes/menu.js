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
        category.push(result[i].name);

        let a=[];
        let im=[];
        for(var j=0;j < result1.length;j++) {


            const result2=await models.item.findOne({
                where:{
                    id:result1[j].item_id
                }
            });


                const result3=await models.item_image.findOne({
                    where:{
                        item_id:result1[j].item_id
                    }
                });

                a.push(result2);
                im.push(result3.image_id);


        }
        item.push(a);
        img.push(im);
    }
    const img_url = "/images/rest"+rest_img.image_id+".png";
    res.render('Webpages/menu',{
        title:rest_name.name,
        id:rest_name.id,
        item : item,
        img:img,
        cat:category,
        url : img_url,
        id:id
    });
});
router.post('/', async function (req, res, next) {
    console.log(req.body.id);
    let q1=await models.item.update(
    {
    avail:0
    }
    ,{
    where:{
        id:req.body.id
    }
    });

});
router.post('/Allavail', async function (req, res, next) {

    let q1=await models.item.update(
        {
            avail:1
        }
        ,{
            where:{
                restaurant_id:req.body.id
            }
        });



    //console.log(result3.rows);


});
router.post('/Allunavail', async function (req, res, next) {

    console.log(req.body.id);
    let q1=await models.item.update(
        {
            avail:0
        }
        ,{
            where:{
                restaurant_id:req.body.id
            }
        });



    //console.log(result3.rows);


});

module.exports = router;