
function service_charge(id, customer_id, description, type, time){
    let _id = id;
    let _customer_id = customer_id;
    let _description = description;
    let _type = type;
    let _time = time;

    let getId = function () { return _id; }
    let getCustomerId = function() { return _customer_id; }
    let getDescription = function() { return _description; }
    let getType = function() { return _type; }
    let getTime = function() { return _time; }

    let setId = function(id) { _id = id; }
    let setCustomerId = function(customer_id) { _customer_id = customer_id; }
    let setDescription = function(description) { _description = description; }
    let setType = function(type) { _type = type; }
    let setTime = function(time) { _time = time; }

    let toString = function() {
        return "id: " + _id + " customer_id: " + _customer_id + " description: " + _description + " type: " + _type + " time: " + _time;
    }

    let getJson = function() {
        return { id: _id, customer_id: _customer_id, description: _description, type: _type, time: _time }
    }

    return {
        getId,
        getCustomerId,
        getDescription,
        getType,
        getTime,
        setId,
        setCustomerId,
        setDescription,
        setType,
        setTime,
        toString,
        getJson
    };
}

let create = function (){
    return new search_history(-1, "", "", "", "");
}

let createFromJson = function (json){
    return new search_history(json.id, json.customer_id, json.description, json.type, json.time);
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