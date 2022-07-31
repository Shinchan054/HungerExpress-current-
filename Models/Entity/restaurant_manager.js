
function restaurant_manager(id, restaurant_id, address_id, name, dob, phone, email){
    let _id = id;
    let _restaurant_id = restaurant_id;
    let _address_id = address_id;
    let _name = name;
    let _dob = dob;
    let _phone = phone;
    let _email = email;

    let getId = function () { return _id; }
    let getRestaurantId = function() { return _restaurant_id; }
    let getAddressId = function() { return _address_id; }
    let getName = function() { return _name; }
    let getDob = function() { return _dob; }
    let getPhone = function() { return _phone; }
    let getEmail = function() { return _email; }

    let setId = function(id) { _id = id; }
    let setRestaurantId = function(restaurant_id) { _restaurant_id = restaurant_id; }
    let setAddressId = function(address_id) { _address_id = address_id; }
    let setName = function(name) { _name = name; }
    let setDob = function(dob) { _dob = dob; }
    let setPhone = function(phone) { _phone = phone; }
    let setEmail = function(email) { _email = email; }

    let toString = function() {
        return "id: " + _id + " restaurant_id: " + _restaurant_id + " address_id: " + _address_id + " name: " + _name + " dob: " + _dob + " phone: " + _phone + " email: " + _email;
    }

    let getJson = function() {
        return { id: _id, restaurant_id: _restaurant_id, address_id: _address_id, name: _name, dob: _dob,  phone: _phone, email: _email}
    }

    return {
        getId,
        getRestaurantId,
        getAddressId,
        getName,
        getDob,
        getPhone,
        getEmail,
        setId,
        setRestaurantId,
        setAddressId,
        setName,
        setDob,
        setPhone,
        setEmail,
        toString,
        getJson
    };
}

let create = function (){
    return new restaurant_manager(-1, "", "", "", "", "", "");
}

let createFromJson = function (json){
    return new restaurant_manager(json.id, json.restaurant_id, json.address_id, json.name, json.dob, json.phone, json.email);
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