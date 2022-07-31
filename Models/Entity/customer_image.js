
function customer_image(id, customer_id, link, time){
    let _id = id;
    let _customer_id = customer_id;
    let _link = link;
    let _time = time;

    let getId = function () { return _id; }
    let getCustomerId = function() { return _customer_id; }
    let getLink = function() { return _link; }
    let getTime = function() { return _time; }

    let setId = function(id) { _id = id; }
    let setCustomerId = function(customer_id) { _customer_id = customer_id; }
    let setLink = function(link) { _link = link; }
    let setTime = function(time) { _time = time; }

    let toString = function() {
        return "id: " + _id + " customer_id: " + _customer_id + " link: " + _link +
            + " time" + _time;
    }

    let getJson = function() {
        return { id: _id, customer_id: _customer_id, link: _link,
             time: _time };
    }

    return {
        getId,
        getCustomerId,
        getLink,
        getTime,
        setId,
        setCustomerId,
        setLink,
        setTime,
        toString,
        getJson
    };
}

let create = function (){
    return new customer_image(-1, -1, "", -1);
}

let createFromJson = function (json){
    return new customer_image(json.id, json.customer_id, json.link, json.time);
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