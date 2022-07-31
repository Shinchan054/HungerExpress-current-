
function category(id, restaurant_id, name){
    let _id = id;
    let _restaurant_id = restaurant_id;
    let _name = name;

    let getId = function () { return _id; }
    let getRestaurantId = function() { return _restaurant_id; }
    let getName = function() { return _name; }

    let setId = function(id) { _id = id; }
    let setRestaurantId = function(restaurant_id) { _restaurant_id = restaurant_id; }
    let setName = function(name) { _name = name; }

    let toString = function() {
        return "id: " + _id + " restaurant_id: " + _restaurant_id + " name: " + _name;
    }

    let getJson = function() {
        return { id: _id, restaurant_id: _restaurant_id, name: _name };
    }

    return {
        getId,
        getRestaurantId,
        getName,
        setId,
        setRestaurantId,
        setName,
        toString,
        getJson
    };
}

let create = function (){
    return new category(-1, -1, "");
}

let createFromJson = function (json){
    return new category(json.id, json.restaurant_id, json.name);
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