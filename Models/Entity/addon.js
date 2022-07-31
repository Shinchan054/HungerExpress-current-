
function addon(id, name, price, count){
    let _id = id;
    let _name = name;
    let _price = price;
    let _count = count;

    let getId = function () { return _id; }
    let getName = function() { return _name; }
    let getPrice = function() { return _price; }
    let getCount = function() { return _count; }

    let setId = function(id) { _id = id; }
    let setName = function(name) { _name = name; }
    let setPrice = function(price) { _price = price; }
    let setCount = function(count) { _count = count; }

    let toString = function() {
        return "id: " + _id + " name: " + _name + " price: " + _price + " count: " + _count;
    }

    let getJson = function() {
        return { id: _id, name: _name, price: _price, count: _count };
    }

    return {
        getId,
        getName,
        getPrice,
        getCount,
        setId,
        setName,
        setPrice,
        setCount,
        toString,
        getJson
    };
}

let create = function (){
    return new addon(-1, "", 0, -1);
}

let createFromJson = function (json){
    return new addon(json.id, json.name, json.price, json.count);
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