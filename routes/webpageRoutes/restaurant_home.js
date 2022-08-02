var express = require('express');
var router = express.Router();
const url = require('url');
const Pool = require('pg').Pool;
let pool = require('./../../db_config');
const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://postgres:tanmoy@localhost:5432/HungerExpress');

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
    res.render('Webpages/restaurant_home',{id:ids,title:rest_name.name , url:url});


});
module.exports = router;