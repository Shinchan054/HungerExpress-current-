
function customer_address(id, customer_id, location, block, road, house, apartment, postal_code, start, finish){
    let _id = id;
    let _customer_id = customer_id;
    let _location = location;
    let _block = block;
    let _road = road;
    let _house = house;
    let _apartment = apartment;
    let _postal_code = postal_code;
    let _start = start;
    let _finish = finish;

    let getId = function (){ return _id; }
    let getCustomerId = function (){ return _customer_id; }
    let getLocation = function() { return _location; }
    let getBlock = function () { return _block; }
    let getRoad = function () { return _road; }
    let getHouse = function () { return _house; }
    let getApartment = function() { return _apartment; }
    let getPostalCode = function () { return _postal_code; }
    let getStart = function () { return _start; }
    let getFinish = function () { return _finish; }

    let setId = function(id) { _id = id; }
    let setCustomerId = function(customer_id) { _customer_id = customer_id; }
    let setLocation = function (location) { _location = location; }
    let setBlock = function (block) { _block = block; }
    let setRoad = function (road) { _road = road; }
    let setHouse = function (house) { _house = house; }
    let setApartment = function (apartment) { _apartment = apartment; }
    let setPostalCode = function (postal_code) { _postal_code = postal_code; }
    let setStart = function (start) { _start = start; }
    let setFinish = function (finish) { _finish = finish; }

    let toString = function() {
        return "id: " + _id + " customer_id:" + _customer_id + " location: " + _location + " block: " + _block + " road: " + _road +
            " house: " + _house +" apartment: " + _apartment +" postalCode: " + _postal_code + " start: " + _start +
            " finish: " + _finish;
    }

    let getJson = function() {
        return { id: _id, customer_id: _customer_id, location: _location, block: _block, road: _road,
            house: _house, apartment: _apartment, postal_code: _postal_code,
            start: _start, finish: _finish};
    }

    return {
        getId,
        getCustomerId,
        getLocation,
        getBlock,
        getRoad,
        getHouse,
        getApartment,
        getPostalCode,
        getStart,
        getFinish,
        setId,
        setCustomerId,
        setLocation,
        setBlock,
        setRoad,
        setHouse,
        setApartment,
        setPostalCode,
        setStart,
        setFinish,
        toString,
        getJson
    };
}

let create = function (){
    return new customer_address(-1, -1, "", "", "", "", "", "", "", "");
}

let createFromJson = function (json){
    return new customer_address(json.id, json.customer_id, json.location, json.block, json.road, json.house,
        json.apartment, json.postal_code, json.start, json.finish);
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