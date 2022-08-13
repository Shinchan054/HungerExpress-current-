const { json } = require('express');
var express = require('express');
const session = require('express-session');
var router = express.Router();
const Pool = require('pg').Pool;
let pool = require('./../../db_config');
const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://postgres:tanmoy@localhost:5432/HungerExpress');

var initModels = require('./../../Models/init-models');
var models = initModels(sequelize);
router.get('/:id', async function (req, res, next) {
    res.cookie('cuid',req.params.id);
    res.render('Webpages/cust_location');
});
router.post('/', async function (req, res, next) {
        lat=req.body.lat;
        long=req.body.lng;
        let id=req.cookies.cuid;

        let an=await models.address.findAll();
        let adid=an.length+1;
        let ans=await models.address.create({
            id:adid,
            latitude:lat,
            longitude:long,
        });
        let ans2=await models.customer.update({
            address_id:adid,
        },{
            where:{
                id:id
            }
        });
    }
);
module.exports = router;