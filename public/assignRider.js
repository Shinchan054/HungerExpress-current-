

const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://postgres:tanmoy@localhost:5432/HungerExpress');

var initModels = require('./../Models/init-models');
var models = initModels(sequelize);
function toRadians(degrees) {
    return degrees * Math.PI / 180;
}
async function Dist(restid,rid)
{
    //console.log(restid,rid);
    //console.log()
    var res=await models.restaurant.findOne({
        where:{
            id:restid
        }
    });
    //console.log(res);
    var result=await models.rest_address.findOne({
        where:{
            id:res.address_id
        }
    });
    var res1=await models.rider.findOne({
        where:{
            id:rid
        }
    });
    var result1=await models.rider_address.findOne({
        where:{
            id:res1.address_id
        }
    });
    var lat1=result.latitude;
    var long1=result.longitude;
    var lat2=result1.latitude;
    var long2=result1.longitude;
    //console.log(lat1,long1,lat2,long2);
    var R = 6371;
    var d1 = toRadians(lat1);
    var d2 = toRadians(lat2);
    var dif1 = toRadians((lat2-lat1));
    var dif2 =toRadians((long2-long1));
    var a = Math.sin(dif1/2) * Math.sin(dif1/2) +
            Math.cos(d1) * Math.cos(d2) *
            Math.sin(dif2 /2) * Math.sin(dif2 /2);
    //console.log(a);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    var d = R * c;
    return d;
}




async function assign(id)
{
    var result=await models.rider.findAll();
    console.log(result.length);
    dist=[];
    let a,b=65000;
    let or=await models.orderr.findOne(
        {
            where:{
                id:id
            }
        }
);
    let rest=await models.restaurant.findOne(
        {
            where:{
                restaurant_manager_id:or.restaurant_manager_id
            }
        });
    for(var i=0;i<result.length;i++)
    {
        let ans=await Dist(rest.id,result[i].id);
        dist.push(ans);
        if(ans<5&&ans<b)
        {
            a=result[i].id;
            b=ans;
            console.log('sfkldsdkfkdsdslfsdf  =======',a);
        }

    }

    console.log('tttttttttsfkldsdkfkdsdslfsdf  =======',a);
    result=await models.orderr.update({
        rider_id:a
    }
        ,{
            where:{
                id:id
            }
        }
    );
}
module.exports = assign;