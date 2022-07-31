
function restaurant_review(id, restaurant_id, order_id, rating, description){
    let _id = id;
    let _restaurant_id = restaurant_id;
    let _order_id = order_id;
    let _rating = rating;
    let _description = description;

    let getId = function () { return _id; }
    let getRestaurantId = function() { return _restaurant_id; }
    let getOrderId = function() { return _order_id; }
    let getRating = function() { return _rating; }
    let getDescription = function() { return _description; }

    let setId = function(id) { _id = id; }
    let setRestaurantId = function(restaurant_id) { _restaurant_id = restaurant_id; }
    let setOrderId = function(order_id) { _order_id = order_id; }
    let setRating = function(rating) { _rating = rating; }
    let setDescription = function(description) { _description = description; }

    let toString = function() {
        return "id: " + _id + " restaurant_id: " + _restaurant_id + " order_id: " + _order_id + " rating: " + _rating + " description: " + _description;
    }

    let getJson = function() {
        return { id: _id, restaurant_id: _restaurant_id, order_id: _order_id, rating: _rating, description: _description }
    }

    return {
        getId,
        getRestaurantId,
        getOrderId,
        getRating,
        getDescription,
        setId,
        setRestaurantId,
        setOrderId,
        setRating,
        setDescription,
        toString,
        getJson
    };
}

let create = function (){
    return new restaurant_review(-1, "", "", "", "");
}

let createFromJson = function (json){
    return new restaurant_review(json.id, json.restaurant_id, json.order_id, json.rating, json.description);
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