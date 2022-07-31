
function customer(id, name, current_coin, current_address_id){
    let _id = id;
    let _name = name;
    let _current_coin = current_coin;
    let _current_address_id = current_address_id;

    let getId = function () { return _id; }
    let getName = function() { return _name; }
    let getCurrentCoin = function() { return _current_coin; }
    let getCurrentAddressId = function() { return _current_address_id; }

    let setId = function(id) { _id = id; }
    let setName = function(name) { _name = name; }
    let setCurrentCoin = function(current_coin) { _current_coin = current_coin; }
    let setCurrentAddressId = function(current_address_id) { _current_address_id = current_address_id; }

    let toString = function() {
        return "id: " + _id + " name: " + _name + " current_coin: " + _current_coin +
                    " current_address_id: " + _current_address_id;
    }

    let getJson = function() {
        return { id: _id, name: _name, current_coin: _current_coin, current_address_id: _current_address_id };
    }

    return {
        getId,
        getName,
        getCurrentCoin,
        getCurrentAddressId,
        setId,
        setName,
        setCurrentCoin,
        setCurrentAddressId,
        toString,
        getJson
    };
}

let create = function (){
    return new customer(-1, "", 0, -1);
}

let createFromJson = function (json){
    return new customer(json.id, json.name, json.current_coin, json.current_address_id);
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