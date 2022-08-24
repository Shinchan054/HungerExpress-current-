const { json } = require('express');
var express = require('express');
const session = require('express-session');
var router = express.Router();
const Pool = require('pg').Pool;
let pool = require('./../../db_config');
const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://postgres:12345@localhost:5432/HungerExpress');

var initModels = require('./../../Models/init-models');
var models = initModels(sequelize);
router.get('/:id', async function (req, res, next) {
    res.cookie('reid',req.params.id);
    res.render('Webpages/rest_location');
});
router.post('/', async function (req, res, next) {

    lat=req.body.lat;
        long=req.body.lng;
        let id=req.cookies.reid;

        let an=await models.rest_address.findAll();let adid;
        if(an!=null)
        adid=an.length+1;
        else
        adid=1;
        let ans=await models.rest_address.create({
            id:adid,
            latitude:lat,
            longitude:long,
        });
        let ans2=await models.restaurant.update({
            address_id:adid,
        },{
            where:{
                id:id
            }
        });

    }
);
module.exports = router;