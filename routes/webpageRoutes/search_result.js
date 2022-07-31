var express = require('express');
var router = express.Router();
const Pool = require('pg').Pool;
let pool = require('./../../db_config');

router.get('/', async function(req, res, next) {

    res.render('Webpages/search_result',{restaurants: {},id:{}});

});
module.exports = router;