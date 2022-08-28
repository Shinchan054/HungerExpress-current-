const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://postgres:tanmoy@localhost:5432/HungerExpress');

var initModels = require('./../Models/init-models');
var models = initModels(sequelize);
async function change(id)
{
    let order=await models.orderr.findOne({
        where:{
            id:id
        }
    });
    let cart=await models.cart.findOne({
        where:{
            id:order.cart_id
        }
    });
    let cust=await models.customer.findOne({
        where:{
            id:cart.customer_id,

        }
    });
    let cust_address=await models.address.findOne({
        where:{
            id:cust.address_id,
        }
    });
    let rider=await models.rider.findOne({
        where:{
            id:order.rider_id,
        }
    });
    let rider_address=await models.rider_address.findOne({
        where:{
            id:rider.address_id,
        }
    });
    let lng1=cust_address.longitude;
    let lat1=cust_address.latitude;
    let lng2=rider_address.longitude;
    let lat2=rider_address.latitude;
    if(lng2>lng1)
    {
        if(lng2-lng1<.0005)
            lng2=lng1;
        else
            lng2-=.0005;
    }
    else
    {
        if(lng1-lng2<.0005)
            lng2=lng1;
        else
            lng2+=.0005;
    }
    if(lat2>lat1)
    {
        if(lat2-lat1<.0005)
            lat2=lat1;
        else
            lat2-=.0005;
    }
    else
    {
        if(lat1-lat2<.0005)
            lat2=lat1;
        else
            lat2+=.0005;
    }
    let update=await models.rider_address.update({
        longitude:lng2,
        latitude:lat2
    },{
        where:{
            id:rider.address_id
        }
    });

}
module.exports = change;