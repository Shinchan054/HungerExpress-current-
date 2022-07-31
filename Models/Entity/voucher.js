
function voucher(id, order_id, time, coin_history_id){
    let _id = id;
    let _order_id = order_id;
    let _time = time;
    let _coin_history_id = coin_history_id;

    let getId = function () { return _id; }
    let getOrderId = function() { return _order_id; }
    let getTime = function() { return _time; }
    let getCoinHistoryId = function() { return _coin_history_id; }

    let setId = function(id) { _id = id; }
    let setOrderId = function(order_id) { _order_id = order_id; }
    let setTime = function(time) { _time = time; }
    let setCoinHistoryId = function(coin_history_id) { _coin_history_id = coin_history_id; }

    let toString = function() {
        return "id: " + _id + " order_id: " + _order_id + " time: " + _time + " coin_history_id:" + _coin_history_id;
    }

    let getJson = function() {
        return { id: _id, order_id: _order_id, time: _time, coin_history_id: _coin_history_id };
    }

    return {
        getId,
        getOrderId,
        getTime,
        getCoinHistoryId,
        setId,
        setOrderId,
        setTime,
        setCoinHistoryId,
        toString,
        getJson
    };
}

let create = function (){
    return new voucher(-1, "", "", -1);
}

let createFromJson = function (json){
    return new voucher(json.id, json.order_id, json.time, json.coin_history_id);
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