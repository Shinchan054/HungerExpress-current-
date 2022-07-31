const { PrismaClient } = require("@prisma/client");
var express = require('express');
var router = express.Router();
const url = require('url');
let pool = require('./../../db_config');

const prisma = new PrismaClient();
router.get('/',async function(req,res){

    res.render('Webpages/search');
});
router.post('/', async function(req, res, next) {
let st=req.body.item;

    let q1="select id from restaurant where name ilike '%"+st+"%';";
    const rest2 = await pool.query(q1);
   let q="select restaurant_id from item where name ilike '%"+st+"%';";
    const result1 = await pool.query(q);
    console.log(result1);
    const id=[];
     const rest1 = result1.rows.filter(element => {
        return element.restaurant_id !== null;
    });

    const rest=[];
    for(var i=0;i<rest1.length;i++)
    {
        rest.push(rest1[i].restaurant_id);
    }
    for(var i=0;i<rest2.rows.length;i++)
    {
          rest.push(rest2.rows[i].id);
    }
    const rest_data=[];
    for(var i=0;i<rest.length;i++)
    {
        var qu = "select name,id  from restaurant where id = "+rest[i];
        const result = await pool.query(qu);
        console.log(result);
        var qu = "select image_id  from restaurant_image where restaurant_id="+result.rows[i].id;
        const result2 = await pool.query(qu);
        id.push(result2.rows[0].image_id);
        rest_data.push(result.rows[i]);
    }
    res.render('Webpages/search_result', {restaurants: rest_data,id:id});

});

module.exports = router;
