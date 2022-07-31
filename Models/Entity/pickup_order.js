
const Order = require('./order')

function pickup_order(id, cart_id, delivery_address_id, restaurant_manager_id, phone, name, pin, target_time){

    let _order = Order.createFromJson({
        id: id, cart_id: cart_id, delivery_address_id: delivery_address_id,
        restaurant_manager_id: restaurant_manager_id, phone: phone, name: name
    });
    let _pin = pin;
    let _target_time = target_time;

    let getOrder = function () { return _order; }
    let getPin = function () { return _pin; }
    let getTargetTime = function () { return _target_time; }

    let setOrder = function (order) { _order = order; }
    let setPin = function (pin) { _pin = pin; }
    let setTargetTime = function (target_time) { _target_time = target_time; }

    let toString = function() {
        return _order.toString() + " pin: " + _pin + " target_time: " + _target_time;
    }

    let getJson = function() {
        let ret = _order.getJson();
        ret["pin"] = _pin;
        ret["target_time"] = _target_time;
        return ret;
    }

    return {
        getOrder,
        getPin,
        getTargetTime,
        setOrder,
        setPin,
        setTargetTime,
        toString,
        getJson
    };
}

let create = function (){
    return new pickup_order(-1, -1, -1, -1, "", "", "", "");
}

let createFromJson = function (json){
    return new pickup_order(json.id, json.cart_id, json.delivery_address_id,
        json.restaurant_manager_id, json.phone, json.name, json.pin, json.target_time);
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