
function item_review(id, item_id, order_id, rating, description){
    let _id = id;
    let _item_id = item_id;
    let _order_id = order_id;
    let _rating = rating;
    let _description = description;

    let getId = function () { return _id; }
    let getItemId = function() { return _item_id; }
    let getOrderId = function() { return _order_id; }
    let getRating = function() { return _rating; }
    let getDescription = function() { return _description; }

    let setId = function(id) { _id = id; }
    let setItemId = function(item_id) { _item_id = item_id; }
    let setOrderId = function(order_id) { _order_id = order_id; }
    let setRating = function(rating) { _rating = rating; }
    let setDescription = function(description) { _description = description; }

    let toString = function() {
        return "id: " + _id + " item_id: " + _item_id + " order_id: " + _order_id + " rating: " + _rating + " description: " + _description;
    }

    let getJson = function() {
        return { id: _id, item_id: _item_id, order_id: _order_id, rating: _rating, description: _description }
    }

    return {
        getId,
        getItemId,
        getOrderId,
        getRating,
        getDescription,
        setId,
        setItemId,
        setOrderId,
        setRating,
        setDescription,
        toString,
        getJson
    };
}

let create = function (){
    return new item_review(-1, "", "", "", "");
}

let createFromJson = function (json){
    return new item_review(json.id, json.item_id, json.order_id, json.rating, json.description);
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