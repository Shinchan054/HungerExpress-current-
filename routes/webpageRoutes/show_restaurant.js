var express = require('express');
var router = express.Router();
const url = require('url');
let pool = require('./../../db_config');

router.get('/:id',async function(req,res){
    let item=[];
    let category=[];
    let img=[];
    var id=req.params.id;
    var q="select name from restaurant where id = "+id;
    const rest_name=await pool.query(q);
    var q="select id,name from category where restaurant_id = "+id;

    const result=await pool.query(q);
    var r = "select image_id from restaurant_image where restaurant_id = "+id;
    const rest_img=await pool.query(r);
    console.log(result.rows);
    for(var i=0;i < result.rows.length;i++) {
        var q1="select item_id from item_category where category_id = "+result.rows[i].id;
        const result1 = await pool.query(q1);
        category.push(result.rows[i].name);
        //console.log(result1.rows);
        let a=[];
        let im=[];
        for(var j=0;j < result1.rows.length;j++) {

            var q2 = "select name,description,price,id,avail  from item where id = " + result1.rows[j].item_id;

            const result2 = await pool.query(q2);
            //console.log(result2.rows);
            if (result2.rows[0].avail == 1) {
                var q2 = "select  image_id  from item_image where item_id = " + result1.rows[j].item_id;
                console.log(q2);
                const result3 = await pool.query(q2);


                a.push(result2.rows[0]);
                im.push(result3.rows[0].image_id);

            }
        }
        item.push(a);
        img.push(im);
    }
    const img_url = "/images/rest"+rest_img.rows[0].image_id+".png";
    res.render('Webpages/show_restaurants',{
        title:rest_name.rows[0].name
        ,item : item,
        img:img,
        cat:category,
        url : img_url
    });
});



module.exports = router;