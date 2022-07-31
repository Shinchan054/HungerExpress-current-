
function item_type(id, weight, price, name, item_id){
    let _id = id;
    let _weight = weight;
    let _price = price;
    let _name = name;
    let _item_id = item_id;

    let getId = function () { return _id; }
    let getWeight = function() { return _weight; }
    let getPrice = function() { return _price; }
    let getName = function() { return _name; }
    let getItemId = function() { return _item_id; }

    let setId = function(id) { _id = id; }
    let setWeight = function(weight) { _weight = weight; }
    let setPrice = function(price) { _price = price; }
    let setName = function(name) { _name = name; }
    let setItemId = function(item_id) { _item_id = item_id; }

    let toString = function() {
        return "id: " + _id + " weight: " + _weight + " price: " + _price + " name: " + _name +
                        " item_id: " + _item_id;
    }

    let getJson = function() {
        return { id: _id, weight: _weight, price: _price, name: _name, item_id: _item_id }
    }

    return {
        getId,
        getWeight,
        getPrice,
        getName,
        getItemId,
        setId,
        setWeight,
        setPrice,
        setName,
        setItemId,
        toString,
        getJson
    };
}

let create = function (){
    return new item_type(-1, "", "", "", "");
}

let createFromJson = function (json){
    return new item_type(json.id, json.weight, json.price, json.name, json.item_id);
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