
function delivery_address(id, location, block, road, house, apartment, postal_code){
    let _id = id;
    let _location = location;
    let _block = block;
    let _road = road;
    let _house = house;
    let _apartment = apartment;
    let _postal_code = postal_code;

    let getId = function (){ return _id; }
    let getLocation = function() { return _location; }
    let getBlock = function () { return _block; }
    let getRoad = function () { return _road; }
    let getHouse = function () { return _house; }
    let getApartment = function() { return _apartment; }
    let getPostalCode = function () { return _postal_code; }

    let setId = function(id) { _id = id; }
    let setLocation = function (location) { _location = location; }
    let setBlock = function (block) { _block = block; }
    let setRoad = function (road) { _road = road; }
    let setHouse = function (house) { _house = house; }
    let setApartment = function (apartment) { _apartment = apartment; }
    let setPostalCode = function (postal_code) { _postal_code = postal_code; }

    let toString = function() {
        return "id: " + _id + " location: " + _location + " block: " + _block + " road: " + _road +
            " house: " + _house +" apartment: " + _apartment +" postalCode: " + _postal_code;
    }

    let getJson = function() {
        return { id: _id, location: _location, block: _block, road: _road,
            house: _house, apartment: _apartment, postal_code: _postal_code };
    }

    return {
        getId,
        getLocation,
        getBlock,
        getRoad,
        getHouse,
        getApartment,
        getPostalCode,
        setId,
        setLocation,
        setBlock,
        setRoad,
        setHouse,
        setApartment,
        setPostalCode,
        toString,
        getJson
    };
}

let create = function (){
    return new delivery_address(-1, "", "", "", "", "", "");
}

let createFromJson = function (json){
    return new delivery_address(json.id, json.location, json.block, json.road, json.house,
        json.apartment, json.postal_code);
}

let createArrayFromJson = function (jsonArray){
    let array = [];
    for(let i=0; i<jsonArray.length; i++){
        array.push(createFromJson(jsonArray[i]));
    }
    return array;
}


module.exports = {
    create,
    createFromJson,
    createArrayFromJson
};