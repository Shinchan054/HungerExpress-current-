
function gift_info(id, order_id, name, phone){
    let _id = id;
    let _order_id = order_id;
    let _name = name;
    let _phone = phone;

    let getId = function () { return _id; }
    let getOrderId = function() { return _order_id; }
    let getName = function() { return _name; }
    let getPhone = function() { return _phone; }

    let setId = function(id) { _id = id; }
    let setOrderId = function(order_id) { _order_id = order_id; }
    let setName = function(name) { _name = name; }
    let setPhone = function(phone) { _phone = phone; }

    let toString = function() {
        return "id: " + _id + " order_id: " + _order_id + " name: " + _name + " phone: " + _phone;
    }

    let getJson = function() {
        return { id: _id, order_id: _order_id, name: _name, phone: _phone }
    }

    return {
        getId,
        getOrderId,
        getName,
        getPhone,
        setId,
        setOrderId,
        setName,
        setPhone,
        toString,
        getJson
    };
}

let create = function (){
    return new gift_info(-1, "", "", "");
}

let createFromJson = function (json){
    return new gift_info(json.id, json.order_id, json.name, json.phone);
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