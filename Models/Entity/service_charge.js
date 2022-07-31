
function service_charge(id, restaurant_id, value, start, finish){
    let _id = id;
    let _restaurant_id = restaurant_id;
    let _value = value;
    let _start = start;
    let _finish = finish;

    let getId = function () { return _id; }
    let getRestaurantId = function() { return _restaurant_id; }
    let getValue = function() { return _value; }
    let getStart = function() { return _start; }
    let getFinish = function() { return _finish; }

    let setId = function(id) { _id = id; }
    let setRestaurantId = function(restaurant_id) { _restaurant_id = restaurant_id; }
    let setValue = function(value) { _value = value; }
    let setStart = function(start) { _start = start; }
    let setFinish = function(finish) { _finish = finish; }

    let toString = function() {
        return "id: " + _id + " restaurant_id: " + _restaurant_id + " value: " + _value + " start: " + _start + " finish: " + _finish;
    }

    let getJson = function() {
        return { id: _id, restaurant_id: _restaurant_id, value: _value, start: _start, finish: _finish }
    }

    return {
        getId,
        getRestaurantId,
        getValue,
        getStart,
        getFinish,
        setId,
        setRestaurantId,
        setValue,
        setStart,
        setFinish,
        toString,
        getJson
    };
}

let create = function (){
    return new service_charge(-1, "", "", "", "");
}

let createFromJson = function (json){
    return new service_charge(json.id, json.restaurant_id, json.value, json.start, json.finish);
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