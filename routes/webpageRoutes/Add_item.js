var express = require('express');
var router = express.Router();
var upload = require('express-fileupload');
const Pool = require('pg').Pool;
let pool = require('./../../db_config');
var fs = require('fs');

global.rest_id=0;



var ImageFolder = 'C:\\Users\\mohai\\IdeaProjects\\HungerExpress-master\\public\\images\\';



router.get('/:id', async function(req, res, next) {

    var id=req.params.id;

    var q="select name,id from category where restaurant_id = "+id;
    const data=await pool.query(q);
    res.cookie("id",id);
    res.render('Webpages/Add_item',
        { title: 'Add_item',
            data: data.rows,
            id:id
        });
});


router.post('/', async function(req, res, next) {

    let inp = req.body;
    let img = req.files;
    let rest_id=req.cookies.id;
    console.log("hello",req.cookies.id);
    var q="select id from item_image";
    const data=await pool.query(q);
    let l=data.rows.length+1;
    await img.image.mv(ImageFolder + l + ".png", async function (err) {
        if(err){
            console.log("Error in saving image! " + err);
        }
        else {
            console.log('done');
        }

    });
    var q1="select id from item";
    const data1=await pool.query(q1);
    let l1=data1.rows.length+101;
    //console.log('here3',inp.id,inp.name);
    console.log(inp);
    var q2="INSERT INTO item(id, name, description, count, rating, restaurant_id, price,avail)VALUES ("+l1+",'"+inp.name+"',"+"'"+inp.description+"'," +inp.count+","+1+","+rest_id+","+inp.price1+","+0+");";

    const data2=await pool.query(q2);
    //console.log('here2');
    q="INSERT INTO item_image(id, image_id, item_id)VALUES ("+l+","+l+","+l1+");";
    const data3=await pool.query(q);
    const d=await pool.query("select id from item_category;");
    let m=d.rows.length+1;
    console.log('here1');
    q="INSERT INTO public.item_category(id, item_id, category_id)VALUES ("+m+","+l1+","+inp.category+");";
    const data4=await pool.query(q);
    console.log('here');
    res.redirect("/restaurant/home/"+req.cookies.id);
});

module.exports = router;