var express = require('express');
var router = express.Router();
const Pool = require('pg').Pool;
let pool = require('./../../db_config');
router.get('/:id',function(req,res){
    ids=req.params.id;
    console.log('id= ',ids);
    res.cookie("rid",ids);
    res.render('Webpages/Add_category');
});
router.post('/', async function(req, res, next) {

        var qu = "select id  from category";
        const result = await pool.query(qu);
        let rest_id=req.cookies.rid;
        //console.log('hello',req.body);
        let l=result.rows.length;
        l=l+100;
        console.log('hello',rest_id,req.body.rows);
        qu ="INSERT INTO category(id, restaurant_id, name)VALUES ("+l+","+rest_id+",'"+req.body.name+"')";
        const result1 = await pool.query(qu);
        res.redirect("/restaurant/home/"+rest_id)

});

module.exports = router;