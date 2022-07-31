
function state(id, order_id, description, time){
    let _id = id;
    let _order_id = order_id;
    let _description = description;
    let _time = time;

    let getId = function () { return _id; }
    let getOrderId = function() { return _order_id; }
    let getDescription = function() { return _description; }
    let getTime = function() { return _time; }

    let setId = function(id) { _id = id; }
    let setOrderId = function(order_id) { _order_id = order_id; }
    let setDescription = function(description) { _description = description; }
    let setTime = function(time) { _time = time; }

    let toString = function() {
        return "id: " + _id + " order_id: " + _order_id + " description: " + _description + " time: " + _time;
    }

    let getJson = function() {
        return { id: _id, order_id: _order_id, description: _description, time: _time }
    }

    return {
        getId,
        getOrderId,
        getDescription,
        getTime,
        setId,
        setOrderId,
        setDescription,
        setTime,
        toString,
        getJson
    };
}

let create = function (){
    return new state(-1, "", "", "");
}

let createFromJson = function (json){
    return new state(json.id, json.order_id, json.description, json.time);
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