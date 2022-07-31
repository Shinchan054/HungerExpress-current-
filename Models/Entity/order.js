
function order(id, cart_id, delivery_address_id, restaurant_manager_id, phone, name){
    let _id = id;
    let _cart_id = cart_id;
    let _delivery_address_id = delivery_address_id;
    let _restaurant_manager_id = restaurant_manager_id;
    let _phone = phone;
    let _name = name;

    let getId = function () { return _id; }
    let getCartId = function() { return _cart_id; }
    let getDeliveryAddressId = function() { return _delivery_address_id; }
    let getRestaurantManagerId = function() { return _restaurant_manager_id; }
    let getPhone = function() { return _phone; }
    let getName = function() { return _name; }

    let setId = function(id) { _id = id; }
    let setCartId = function(cart_id) { _cart_id = cart_id; }
    let setDeliveryAddressId = function(delivery_address_id) { _delivery_address_id = delivery_address_id; }
    let setRestaurantManagerId = function(restaurant_manager_id) { _restaurant_manager_id = restaurant_manager_id; }
    let setPhone = function(phone) { _phone = phone; }
    let setName = function(name) { _name = name; }

    let toString = function() {
        return "id: " + _id + + " cart_id: " + _cart_id +
                " delivery_address_id: " + _delivery_address_id + " restaurant_manager_id: " + _restaurant_manager_id
                + " phone: " + _phone + " name: " + _name;
    }

    let getJson = function() {
        return { id: _id, cart_id: _cart_id, delivery_address_id: _delivery_address_id,
                 restaurant_manager_id: _restaurant_manager_id, phone: _phone, name: _name };
    }

    return {
        getId,
        getCartId,
        getDeliveryAddressId,
        getRestaurantManagerId,
        getPhone,
        getName,
        setId,
        setCartId,
        setDeliveryAddressId,
        setRestaurantManagerId,
        setPhone,
        setName,
        toString,
        getJson
    };
}

let create = function (){
    return new order(-1, -1, -1, -1, "", "");
}

let createFromJson = function (json){
    return new order(json.id, json.cart_id, json.delivery_address_id,
                     json.restaurant_manager_id, json.phone, json.name);
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