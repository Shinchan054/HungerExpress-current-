
function cart(id, restaurant_id, customer_id, order_time, delivery_time, total_price){
    let _id = id;
    let _restaurant_id = restaurant_id;
    let _customer_id = customer_id;
    let _order_time = order_time;
    let _delivery_time = delivery_time;
    let _total_price = total_price;

    let getId = function () { return _id; }
    let getRestaurantId = function() { return _restaurant_id; }
    let getCustomerId = function() { return _customer_id; }
    let getOrderTime = function() { return _order_time; }
    let getDeliveryTime = function() { return _delivery_time; }
    let getTotalPrice = function() { return _total_price; }

    let setId = function(id) { _id = id; }
    let setRestaurantId = function(restaurant_id) { _restaurant_id = restaurant_id; }
    let setCustomerId = function(customer_id) { _customer_id = customer_id; }
    let setOrderTime = function(order_time) { _order_time = order_time; }
    let setDeliveryTime = function(order_time) { _delivery_time = order_time; }
    let setTotalPrice = function(total_price) { _total_price = total_price; }

    let toString = function() {
        return "id: " + _id + " restaurant_id: " + _restaurant_id + " customer_id: " + _customer_id +
                " order_time: " + _order_time + " delivery_time" + _delivery_time + " total_price" + _total_price;
    }

    let getJson = function() {
        return { id: _id, restaurant_id: _restaurant_id, customer_id: _customer_id,
                order_time: _order_time, _delivery_time: _delivery_time, total_price: _total_price }
    }

    return {
        getId,
        getRestaurantId,
        getCustomerId,
        getOrderTime,
        getDeliveryTime,
        getTotalPrice,
        setId,
        setRestaurantId,
        setCustomerId,
        setOrderTime,
        setDeliveryTime,
        setTotalPrice,
        toString,
        getJson
    };
}

let create = function (){
    return new cart(-1, -1, -1, -"", "", 0);
}

let createFromJson = function (json){
    return new cart(json.id, json.restaurant_id, json.customer_id, json.order_time,
                    json.delivery_time, json.total_price);
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