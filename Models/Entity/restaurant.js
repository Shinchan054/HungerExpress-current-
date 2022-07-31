
function restaurant(id, name, location, rating, current_service_charge_id, current_address_id){
    let _id = id;
    let _name = name;
    let _location = location;
    let _rating = rating;
    let _current_service_charge_id = current_service_charge_id;
    let _current_address_id = current_address_id;

    let getId = function () { return _id; }
    let getName = function() { return _name; }
    let getLocation = function() { return _location; }
    let getRating = function() { return _lrating; }
    let getCurrentServiceChargeId = function() { return _current_service_charge_id; }
    let getCurrentAddressId = function() { return _current_address_id; }

    let setId = function(id) { _id = id; }
    let setName = function(name) { _name = name; }
    let setLocation = function(location) { _location = location; }
    let setRating = function(rating) { _rating = rating; }
    let setCurrentServiceChargeId = function(current_service_charge_id) { _current_service_charge_id = current_service_charge_id; }
    let setCurrentAddressId = function(current_address_id) { _current_address_id = current_address_id; }

    let toString = function() {
        return "id: " + _id + " name: " + _name + " location: " + _location + " rating: " + _rating +
                " current_service_charge_id: " + _current_service_charge_id + " current_address_id: " + _current_address_id;
    }

    let getJson = function() {
        return { id: _id, name: _name, location: _location, rating: _rating, current_service_charge_id: _current_service_charge_id, current_address_id: _current_address_id }
    }

    return {
        getId,
        getName,
        getLocation,
        getRating,
        getCurrentServiceChargeId,
        getCurrentAddressId,
        setId,
        setName,
        setLocation,
        setRating,
        setCurrentServiceChargeId,
        setCurrentAddressId,
        toString,
        getJson
    };
}

let create = function (){
    return new restaurant(-1, "", "", "", "", "");
}

let createFromJson = function (json){
    return new restaurant(json.id, json.name, json.location, json.rating, json.current_service_charge_id, json.current_address_id);
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