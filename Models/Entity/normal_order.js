
const Order = require('./order')

function normal_order(id, cart_id, delivery_address_id, restaurant_manager_id, phone, name, estimated_time){

    let _order = Order.createFromJson({
        id: id, cart_id: cart_id, delivery_address_id: delivery_address_id,
        restaurant_manager_id: restaurant_manager_id, phone: phone, name: name
    });
    let _estimated_time = estimated_time;

    let getOrder = function () { return _order; }
    let getEstimatedTime = function () { return _estimated_time; }

    let setOrder = function (order) { _order = order; }
    let setEstimatedTime = function (estimated_time) { _estimated_time = estimated_time; }

    let toString = function() {
        return _order.toString() + " estimated_time: " + _estimated_time;
    }

    let getJson = function() {
        let ret = _order.getJson();
        ret["estimated_time"] = _estimated_time;
        return ret;
    }

    return {
        getOrder,
        getEstimatedTime,
        setOrder,
        setEstimatedTime,
        toString,
        getJson
    };
}

let create = function (){
    return new normal_order(-1, -1, -1, -1, "", "", "");
}

let createFromJson = function (json){
    return new normal_order(json.id, json.cart_id, json.delivery_address_id,
        json.restaurant_manager_id, json.phone, json.name, json.estimated_time);
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