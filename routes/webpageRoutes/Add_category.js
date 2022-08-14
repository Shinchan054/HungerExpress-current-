var express = require('express');
var router = express.Router();
const Pool = require('pg').Pool;
let pool = require('./../../db_config');


const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://postgres:tanmoy@localhost:5432/HungerExpress');

var initModels = require('./../../Models/init-models');
var models = initModels(sequelize);


router.get('/:id',function(req,res){
    ids=req.params.id;
    console.log('id= ',ids);
    res.cookie("rid",ids);
    res.render('Webpages/Add_category');
});
router.post('/', async function(req, res, next) {


        let rest_id=req.cookies.rid;
        //console.log('hello',req.body);
        let result=await models.category.findAll();
        let l=result.length;
        l=l+100;
        //console.log('hello',rest_id,req.body.rows);
        // qu ="INSERT INTO category(id, restaurant_id, name)VALUES ("+l+","+rest_id+",'"+req.body.name+"')";
        // const result1 = await pool.query(qu);
        let result1=await models.category.findOne({
            where: {
                restaurant_id: rest_id,
                name: req.body.name
            }
        });

        if(result1==null)
        {
            let ans= await models.category.create({
                id : l,
                restaurant_id : rest_id,
                name : req.body.name
            });
        }
        
            res.redirect("/restaurant/home/"+rest_id)

});

module.exports = router;