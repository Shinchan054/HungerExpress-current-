const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://postgres:tanmoy@localhost:5432/HungerExpress');

var initModels = require('./../Models/init-models');
var models = initModels(sequelize);
function toRadians(degrees) {
    return degrees * Math.PI / 180;
}
async function Dist(lat1,long1,lat2,long2)
{
    var R = 6371;
    var d1 = toRadians(lat1);
    var d2 = toRadians(lat2);
    var dif1 = toRadians((lat2-lat1));
    var dif2 =toRadians((long2-long1));
    var a = Math.sin(dif1/2) * Math.sin(dif1/2) +
        Math.cos(d1) * Math.cos(d2) *
        Math.sin(dif2 /2) * Math.sin(dif2 /2);

    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    var d = R * c;
    return d;
}




async function CalculateDelFee(cid,rid)
{

    let cust=await models.customer.findOne({
        where: {
            id: cid
        }
    });
    let customer_address=await models.address.findOne({
        where: {
            id: cust.address_id
        }
    });

        let rest=await models.restaurant.findOne({
            where: {
                id: rid
            }
        });
        let rest_address=await models.rest_address.findOne({
            where: {
                id: rest.address_id
            }
        });
        let dst=await Dist(customer_address.latitude,customer_address.longitude,rest_address.latitude,rest_address.longitude);
        let delfee=dst*10;
        if(delfee<=15)
            return 15;
        else
            return delfee;


}
module.exports = CalculateDelFee;