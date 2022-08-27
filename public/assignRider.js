

const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://postgres:12345@localhost:5432/HungerExpress');

var initModels = require('./../Models/init-models');
var models = initModels(sequelize);
function toRadians(degrees) {
    return degrees * Math.PI / 180;
}
async function Dist(restid,rid)
{

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
    var ri=await models.TempRider.findAll();
    let r=ri.length;
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
    var map=new Map();
    for(var i=0;i<result.length;i++) {
        let ans = await Dist(rest.id, result[i].id);
        dist.push(ans);
        console.log(ans);
        if (ans < 5) {
            map.set(ans, result[i].id);


        }
    }
    const map1=new Map([...map].sort());
        let count=0;
        console.log(map1);
    for (var key of map1.keys()) {
        let rid=await models.TempRider.create(
            {
                id:r,
                rider_id:map1.get(key),
                order_id:id

            }
        );
        count++;
        r++;
        if(count==10)
        {
            break;
        }

    }


}
module.exports = assign;