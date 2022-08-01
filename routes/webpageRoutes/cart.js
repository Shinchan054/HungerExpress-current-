const { json } = require('express');
var express = require('express');
const session = require('express-session');
var router = express.Router();
const Pool = require('pg').Pool;
let pool = require('./../../db_config');


router.get('/', function (req, res, next) {
    //console.log(req.session.cart.key);
    const name=[];
    const price=[];
    const qty =[];
    const subTotal=[];
    if(!req.session.cart){
        res.render('Webpages/noOrder');
    }
    let totalprice=req.session.cart.totalPrice;
    let totalqty=req.session.cart.totalQty;
    for(var i=0;i<req.session.cart.key.length;i++){
    name.push(req.session.cart.key[i]);
    price.push(req.session.cart.items[req.session.cart.key[i]].price/req.session.cart.items[req.session.cart.key[i]].qty);
    qty.push(req.session.cart.items[req.session.cart.key[i]].qty);
    subTotal.push(req.session.cart.items[req.session.cart.key[i]].price);

    }
    console.log(name,price,qty,subTotal);
    res.render('Webpages/cart-page',{
        title:'Cart',
        name:name,
        price:price,
        qty:qty,
        subTotal:subTotal,
        totalprice:totalprice,
        totalqty:totalqty
    });
});



router.post('/update', async function (req, res, next) {
    console.log('received');
     if(!req.session.cart)
     {
        req.session.cart={
            items:{},
            totalQty:0,
            totalPrice:0,
            key:[]

        }
     }

     let cart = req.session.cart;
       console.log(req.body.name);
         if(!cart.items[req.body.name])
         {
            cart.items[req.body.name] ={
                name: req.body.name,
                qty : 1,
                price: req.body.price,
                
            }
            cart.totalQty = cart.totalQty + 1;
            cart.totalPrice = cart.totalPrice + req.body.price;
            cart.key.push(req.body.name);
         }
         else{
            cart.items[req.body.name].qty = cart.items[req.body.name].qty + 1;
            cart.items[req.body.name].price = cart.items[req.body.name].price + req.body.price;
            cart.totalQty = cart.totalQty + 1;
            cart.totalPrice = cart.totalPrice + req.body.price;
            
         }
         console.log('hello',cart); 
        
          res.json({ cart : req.session.cart});
});

module.exports = router;