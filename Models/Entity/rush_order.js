
const Order = require('./order')

function rush_order(id, cart_id, delivery_address_id, restaurant_manager_id, phone, name, maximum_time, estimated_time){

    let _order = Order.createFromJson({
        id: id, cart_id: cart_id, delivery_address_id: delivery_address_id,
        restaurant_manager_id: restaurant_manager_id, phone: phone, name: name
    });
    let _maximum_time = maximum_time;
    let _estimated_time = estimated_time;

    let getOrder = function () { return _order; }
    let getMaximumTime = function () { return _maximum_time; }
    let getEstimatedTime = function () { return _estimated_time; }

    let setOrder = function (order) { _order = order; }
    let setMaximumTime = function (pin) { _maximum_time = maximum_time; }
    let setEstimatedTime = function (estimated_time) { _estimated_time = estimated_time; }

    let toString = function() {
        return _order.toString() + " maximum_time: " + _maximum_time + " estimated_time: " + _estimated_time;
    }

    let getJson = function() {
        let ret = _order.getJson();
        ret["maximum_time"] = _maximum_time;
        ret["estimated_time"] = _estimated_time;
        return ret;
    }

    return {
        getOrder,
        getMaximumTime,
        getEstimatedTime,
        setOrder,
        setMaximumTime,
        setEstimatedTime,
        toString,
        getJson
    };
}

let create = function (){
    return new rush_order(-1, -1, -1, -1, "", "", "", "");
}

let createFromJson = function (json){
    return new rush_order(json.id, json.cart_id, json.delivery_address_id,
        json.restaurant_manager_id, json.phone, json.name, json.maximum_time, json.estimated_time);
}

let createArrayFromJson = function (jsonArray){
    let array = [];
    for(let i=0; i<jsonArray.length; i++){
        array.push(new createFromJson(jsonArray[i]));
    }
    return array;
}


module.exports = {
    create,
    createFromJson,
    createArrayFromJson
};