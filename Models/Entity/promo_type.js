
function promo_type(id, type, owner_id, value, owner_type){
    let _id = id;
    let _type = type;
    let _owner_id = owner_id;
    let _value = value;
    let _owner_type = owner_type;

    let getId = function () { return _id; }
    let getType = function() { return _type; }
    let getOwnerId = function() { return _owner_id; }
    let getValue = function() { return _value; }
    let getOwnerType = function() { return _owner_type; }

    let setId = function(id) { _id = id; }
    let setType = function(type) { _type = type; }
    let setOwnerId = function(owner_id) { _owner_id = owner_id; }
    let setValue = function(value) { _value = value; }
    let setOwnerType = function(owner_type) { _owner_type = owner_type; }

    let toString = function() {
        return "id: " + _id + " type: " + _type + " owner_id: " + _owner_id + " value: " + _value + " owner_type: " + _owner_type;
    }

    let getJson = function() {
        return { id: _id, type: _type, owner_id: _owner_id, value: _value, owner_type: _owner_type }
    }

    return {
        getId,
        getType,
        getOwnerId,
        getValue,
        getOwnerType,
        setId,
        setType,
        setOwnerId,
        setValue,
        setOwnerType,
        toString,
        getJson
    };
}

let create = function (){
    return new promo_type(-1, "", "", "", "");
}

let createFromJson = function (json){
    return new promo_type(json.id, json.type, json.owner_id, json.value, json.owner_type);
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