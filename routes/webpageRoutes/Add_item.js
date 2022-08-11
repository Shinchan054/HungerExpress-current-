var express = require('express');
var router = express.Router();
var upload = require('express-fileupload');
const Pool = require('pg').Pool;
let pool = require('./../../db_config');
var fs = require('fs');
const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://postgres:12345@localhost:5432/HungerExpress');

var initModels = require('./../../Models/init-models');
var models = initModels(sequelize);

global.rest_id=0;



var ImageFolder = 'C:\\Users\\mohai\\IdeaProjects\\HungerExpress-current\\public\\images\\';



router.get('/:id', async function(req, res, next) {

    var id=req.params.id;

    //var q="select name,id from category where restaurant_id = "+id;
    //const data=await pool.query(q);
    const data=await models.category.findAll({

        where: {
            restaurant_id: id
        }
    });
    res.cookie("id",id);
    res.render('Webpages/Add_item',
        { title: 'Add_item',
            data: data,
            id:id
        });
});


router.post('/', async function(req, res, next) {

    let inp = req.body;
    let img = req.files;
    let rest_id=req.cookies.id;
    console.log("hello",req.cookies.id);
    //var q="select id from item_image";
    //const data=await pool.query(q);
    const data=await models.item_image.findAll();
    let l=data.length+1;
    await img.image.mv(ImageFolder + l + ".png", async function (err) {
        if(err){
            console.log("Error in saving image! " + err);
        }
        else {
            console.log('done');
        }

    });

    const data1=await models.item.findAll();
    let l1=data1.length+101;

    const data2=await models.item.create({
        id:l1,
        name:inp.name,
        description:inp.description,
        count:inp.count,
        rating:1,
        restaurant_id:rest_id,
        price:inp.price1,
        avail:1
    });


    const data3=await models.item_image.create({
        id:l,
        image_id:l,
        item_id:l1
    });

    //const d=await pool.query("select id from item_category;");
    const d=await models.item_category.findAll();
    let m=d.length+1;
    //q="INSERT INTO public.item_category(id, item_id, category_id)VALUES ("+m+","+l1+","+inp.category+");";
    //const data4=await pool.query(q);
const data4=await models.item_category.create({
    id:m,
    item_id:l1,
    category_id:inp.category

});

    res.redirect("/restaurant/home/"+req.cookies.id);
});

module.exports = router;