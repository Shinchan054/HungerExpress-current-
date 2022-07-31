
function promo_use(id, promo_id, order_id, time){
    let _id = id;
    let _promo_id = promo_id;
    let _order_id = order_id;
    let _time = time;

    let getId = function () { return _id; }
    let getPromoId = function() { return _promo_id; }
    let getOrderId = function() { return _order_id; }
    let getTime = function() { return _time; }

    let setId = function(id) { _id = id; }
    let setPromoId = function(promo_id) { _promo_id = promo_id; }
    let setOrderId = function(order_id) { _order_id = order_id; }
    let setTime = function(time) { _time = time; }

    let toString = function() {
        return "id: " + _id + " promo_id: " + _promo_id + " order_id: " + _order_id + " time: " + _time;
    }

    let getJson = function() {
        return { id: _id, promo_id: _promo_id, order_id: _order_id, time: _time }
    }

    return {
        getId,
        getPromoId,
        getOrderId,
        getTime,
        setId,
        setPromoId,
        setOrderId,
        setTime,
        toString,
        getJson
    };
}

let create = function (){
    return new promo_use(-1, "", "", "");
}

let createFromJson = function (json){
    return new promo_use(json.id, json.promo_id, json.order_id, json.time);
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