const { json } = require('express');
var express = require('express');
const session = require('express-session');
var router = express.Router();
const Pool = require('pg').Pool;
let pool = require('./../../db_config');
const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://postgres:tanmoy@localhost:5432/HungerExpress');
const stripe = require('stripe')(process.env.key)
var initModels = require('./../../Models/init-models');
var models = initModels(sequelize);
var CalculateDelFee=require('./../../public/CalculateDeliveryfee');

router.get('/', async function (req, res, next) {
    //console.log(req.session.cart.key);
    const name=[];
    const price=[];
    const qty =[];
    const subTotal=[];
    let cust_id=req.cookies.cust_id;
    let rest_id=req.cookies.cust_rest_id;
    if(!req.session.cart){
        res.render('Webpages/noOrder');
    }
    else {
        let totalprice = req.session.cart.totalPrice;
        let totalqty = req.session.cart.totalQty;
        for (var i = 0; i < req.session.cart.key.length; i++) {
            name.push(req.session.cart.key[i]);
            price.push(req.session.cart.items[req.session.cart.key[i]].price / req.session.cart.items[req.session.cart.key[i]].qty);
            qty.push(req.session.cart.items[req.session.cart.key[i]].qty);
            subTotal.push(req.session.cart.items[req.session.cart.key[i]].price);

        }
        let delfee = await CalculateDelFee(cust_id, rest_id);
        req.session.cart.delfee = delfee;
        //console.log(name,price,qty,subTotal);
        totalprice = totalprice + delfee;
        req.session.cart.totalPrice = totalprice;
        res.render('Webpages/cart-page', {
            title: 'Cart',
            name: name,
            price: price,
            qty: qty,
            subTotal: subTotal,
            totalprice: totalprice,
            delfee: delfee,
            totalqty: totalqty
        });
    }
});




router.post('/update', async function (req, res, next) {
    console.log('received');

     if(!req.session.cart)
     {
        req.session.cart={
            items:{},
            totalQty:0,
            totalPrice:0,
            key:[],
            customer_id:req.body.cid,
            restaurant_id:req.body.rid,
            delfee:0


        }

     }

     let cart = req.session.cart;

         if(!cart.items[req.body.item.name])
         {
            cart.items[req.body.item.name] ={
                id:req.body.item.id,
                name: req.body.item.name,
                qty : 1,
                price: req.body.item.price,

            }
            cart.totalQty = cart.totalQty + 1;
            cart.totalPrice = cart.totalPrice + req.body.item.price;
            cart.key.push(req.body.item.name);
            //cart.rest_id=req.body.rid;
            //cart.customer_id=req.body.cid;
            //cart.rest_id=req.body.rid;
         }
         else{
            cart.items[req.body.item.name].qty = cart.items[req.body.item.name].qty + 1;
            cart.items[req.body.item.name].price = cart.items[req.body.item.name].price + req.body.item.price;
            cart.totalQty = cart.totalQty + 1;
            cart.totalPrice = cart.totalPrice + req.body.item.price;

         }


          res.json({ cart : req.session.cart});
});
router.post('/', async function (req, res, next) {
    let str = null;
    let col=await models.cart.findAll();
    let l=col.length;
    let pt=req.body.ordertype;
    //console.log('jfsakfasdfkasdlfkSFLSKDFADSLFDSAKFDSALFKDSF',pt);
    //console.log(req.session.cart.restaurant_id,req.session.cart.customer_id);

    if(pt=='cod'){
        let count=await models.payment_info.findAll();

        let pay=await models.payment_info.create({
            id:count.length+101,
            type:'cod',
        });
        let ans=await models.cart.create({
            id:l+1,
            customer_id:req.session.cart.customer_id,
            restaurant_id:req.session.cart.restaurant_id,
            total_price:req.session.cart.totalPrice,
            Delivery_fee:req.session.cart.delfee,
            Payment_info_id:count.length+1,
        });

        //console.log(req.session.cart.items[req.session.cart.key[0]]);
        let an=await models.cart_item.findAll();
        let ls=an.length+1;
        for(var i=0;i<req.session.cart.key.length;i++){
            let ans=await models.cart_item.create({
                id:ls+i+1000,
                cart_id:l+1,
                item_id:req.session.cart.items[req.session.cart.key[i]].id,
                count:req.session.cart.items[req.session.cart.key[i]].qty,
                total_price:req.session.cart.items[req.session.cart.key[i]].price,
            });
        }
        str = '/customer/order_page/'+(l+1);
        res.json({str:str});

    }
    else{
        stripe.charges.create({
            amount: req.session.cart.totalPrice*100,
            source : req.body.token,
            currency: 'bdt',
            description: 'test charge'
        }).then(async function(resp){

            //console.log(resp.receipt_url);
            //console.log('stripe charge success');
            let count=await models.payment_info.findAll();

            let pay=await models.payment_info.create({
                id:count.length+101,
                type:'card',
                url:resp.receipt_url,
                transaction_id:resp.balance_transaction,
                account_no:resp.id,
                time:new Date().toLocaleString().slice(0, 19).replace('T', ' ')

            });

            let ans= await models.cart.create({
                id:l+1,
                customer_id:req.session.cart.customer_id,
                restaurant_id:req.session.cart.restaurant_id,
                total_price:req.session.cart.totalPrice,
                Delivery_fee:req.session.cart.delfee,
                Payment_info_id:count.length+101,

            });


            let an= await models.cart_item.findAll();
            let ls=an.length+1;
            for(var i=0;i<req.session.cart.key.length;i++){
                let ans= await models.cart_item.create({
                    id:ls+i,
                    cart_id:l+1,
                    item_id:req.session.cart.items[req.session.cart.key[i]].id,
                    //item_name:req.session.cart.items[req.session.cart.key[i]].name,
                    count:req.session.cart.items[req.session.cart.key[i]].qty,
                    total_price:req.session.cart.items[req.session.cart.key[i]].price,
                });

            }
            str = '/customer/order_page/'+(l+1);
            //console.log("klgjdhgjlhlfghfjhjhkklfglhfhghjfg",str);
            res.json({str:str});
           // res.redirect(str);

        }).catch(function(err){
            str='/customer/cart';
            res.json({str:str});
        });
    }


//res.json({str:str});

});



router.post('/plus', async function (req, res, next) {
    console.log('hahahahaha');
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

        res.json({ cart : req.session.cart});
} );


router.post('/minus', async function (req, res, next) {

        let cart = req.session.cart;
        if(cart.items[req.body.name])
        {
            cart.totalQty = cart.totalQty - 1;
            cart.totalPrice = cart.totalPrice - req.body.price;
            cart.items[req.body.name].qty = cart.items[req.body.name].qty - 1;
            if(cart.items[req.body.name].qty==0)
            {
                delete cart.items[req.body.name];
                cart.key.splice(cart.key.indexOf(req.body.name),1);
            }
            else{
                cart.items[req.body.name].price = cart.items[req.body.name].price - req.body.price;
            }
        }


        if(cart.totalQty==0)
        {
            req.session.cart = null;
            res.redirect(req.get('referer'));
        }
        else{
        res.json({ cart : req.session.cart});
        }
} );


// router.post('/plus', async function (req, res, next) {
//     console.log('hahahahaha');
//     let cart = req.session.cart;
//        console.log(req.body.name);
//        cart.items[req.body.name].qty = cart.items[req.body.name].qty + 1;
//        cart.items[req.body.name].price = cart.items[req.body.name].price + req.body.price;
//        cart.totalQty = cart.totalQty + 1;
//        cart.totalPrice = cart.totalPrice + req.body.price;
//        res.redirect('/');
// }
// );



module.exports = router;

