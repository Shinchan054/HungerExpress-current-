
function item(id, name, description, count, rating){
    let _id = id;
    let _name = name;
    let _description = description;
    let _count = count;
    let _rating = rating;

    let getId = function () { return _id; }
    let getName = function() { return _name; }
    let getDescription = function() { return _description; }
    let getCount = function() { return _count; }
    let getRating = function() { return _rating; }

    let setId = function(id) { _id = id; }
    let setName = function(name) { _name = name; }
    let setDescription = function(description) { _description = description; }
    let setCount = function(count) { _count = count; }
    let setRating = function(rating) { _rating = rating; }

    let toString = function() {
        return "id: " + _id + " name: " + _name + " description: " + _description + " count: " + _count + " rating: " + _rating;
    }

    let getJson = function() {
        return { id: _id, name: _name, description: _description, count: _count, rating: _rating }
    }

    return {
        getId,
        getName,
        getDescription,
        getCount,
        getRating,
        setId,
        setName,
        setDescription,
        setCount,
        setRating,
        toString,
        getJson
    };
}

let create = function (){
    return new item(-1, "", "", "", "");
}

let createFromJson = function (json){
    return new item(json.id, json.name, json.description, json.count, json.rating);
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