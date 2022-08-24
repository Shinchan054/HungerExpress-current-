var express = require('express');
var router = express.Router();
//const Pool = require('pg').Pool;
let pool = require('./../../db_config');
const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://postgres:12345@localhost:5432/HungerExpress');
 var assign=require('./../../public/assignRider');
var initModels = require('./../../Models/init-models');
var models = initModels(sequelize);
router.get('/', async function(req, res, next) {
    //var ids=req.params.id;
    var ids=req.cookies.cust_id;

    res.cookie("cust_id",ids);
    if(typeof(ids)!='undefined') {
        let result=await models.restaurant.findAll();
        //var qu = "select name,id  from restaurant";
        //const result = await pool.query(qu);
        const id=[];
        for(var i=0;i<result.length;i++)
        {
            //var q = "select image_id  from restaurant_image where restaurant_id="+result[i].id;
            //const result1 = await pool.query(q);
            let result1=await models.restaurant_image.findOne({
                where: {
                    restaurant_id: result[i].id
                }
            });
            id.push(result1.image_id);
        }

        res.render('Webpages/customer', {restaurants: result,id:id,cid:ids});
    }
    else
    {
        res.render('Webpages/customer', {title: 'no one'});
    }
});

router.post('/', async function(req, res, next) {
    let st=req.body.search;
    console.log(st);

    let q1="select id from restaurant where name ilike '%"+st+"%';";
    const rest2 = await pool.query(q1);
    let q="select restaurant_id from item where name ilike '%"+st+"%';";
    const result1 = await pool.query(q);
    console.log(result1);
    const id=[];
    const rest1 = result1.rows.filter(element => {
        return element.restaurant_id !== null;
    });

    const rests=[];
    for(var i=0;i<rest1.length;i++)
    {
        rests.push(rest1[i].restaurant_id);
    }
    for(var i=0;i<rest2.rows.length;i++)
    {
        rests.push(rest2.rows[i].id);
    }
    let rest = [...new Set(rests)];
    const rest_data=[];
    for(var i=0;i<rest.length;i++)
    {
        var qu = "select name,id  from restaurant where id = "+rest[i];
        const result = await pool.query(qu);
        console.log(result);
        var qu = "select image_id  from restaurant_image where restaurant_id="+result.rows[0].id;
        const result2 = await pool.query(qu);
        id.push(result2.rows[0].image_id);
        rest_data.push(result.rows[0]);
    }
    res.render('Webpages/search_result', {restaurants: rest_data,id:id});

});
module.exports = router;