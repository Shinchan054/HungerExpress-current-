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
    res.cookie('cuid',req.params.id);
    res.render('Webpages/cust_location');
});
router.post('/', async function (req, res, next) {
    
        lat=req.body.lat;
        long=req.body.lng;
        let id=req.cookies.cuid;

        let customer=await models.customer.findOne({
            where:{
                id:id
            }
        });
        console.log(customer.address_id);
        let customer_address=await models.address.findOne({
            where:{
                id:customer.address_id
            }
        });
        if(customer_address==null)
        {
            let add=await models.address.findAll();
            let addid=add.length+1;
            await models.address.create({
                id:addid,
                lat:lat,
                long:long
            });
            let ans2=await models.customer.update({
                address_id:adid,
            },{
                where:{
                    id:id
                }
            })
        }
        else
        {
            console.log("aschi vai");
            let upd=await models.address.update({
                latitude:lat,
                longitude:long
            },{
                where:{
                    id:customer.address_id
                }
            })
        }
        

    }
);
module.exports = router;