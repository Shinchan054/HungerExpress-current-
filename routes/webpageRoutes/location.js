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
router.get('/', async function (req, res, next) {
    res.render('Webpages/location');
});
router.post('/', async function (req, res, next) {
    lat=req.body.lat;
    long=req.body.lng;
    console.log(lat,long);
}
);
module.exports = router;