
function restaurant_image(id, restaurant_id, link, time){
    let _id = id;
    let _restaurant_id = restaurant_id;
    let _link = link;
    let _time = time;

    let getId = function () { return _id; }
    let getRestaurantId = function() { return _restaurant_id; }
    let getLink = function() { return _link; }
    let getTime = function() { return _time; }

    let setId = function(id) { _id = id; }
    let setRestaurantId = function(restaurant_id) { _restaurant_id = restaurant_id; }
    let setLink = function(price) { _link = link; }
    let setTime = function(count) { _time = time; }

    let toString = function() {
        return "id: " + _id + " restaurant_id: " + _restaurant_id + " link: " + _link + " time: " + _time;
    }

    let getJson = function() {
        return { id: _id, restaurant_id: _restaurant_id, link: _link, time: _time }
    }

    return {
        getId,
        getRestaurantId,
        getLink,
        getTime,
        setId,
        setRestaurantId,
        setLink,
        setTime,
        toString,
        getJson
    };
}

let create = function (){
    return new addon(-1, "", "", "");
}

let createFromJson = function (json){
    return new addon(json.id, json.restaurant_id, json.link, json.time);
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