
function coin_history(id, coin_use_type_id, customer_id, voucher_id, time){
    let _id = id;
    let _coin_use_type_id = coin_use_type_id;
    let _customer_id = customer_id;
    let _voucher_id = voucher_id;
    let _time = time;

    let getId = function () { return _id; }
    let getCoinUseTypeId = function() { return _coin_use_type_id; }
    let getCustomerId = function() { return _customer_id; }
    let getVoucherId = function() { return _voucher_id; }
    let getTime = function() { return _time; }

    let setId = function(id) { _id = id; }
    let setCoinUseTypeId = function(coin_use_type_id) { _coin_use_type_id = coin_use_type_id; }
    let setCustomerId = function(customer_id) { _customer_id = customer_id; }
    let setVoucherId = function(voucher_id) { _voucher_id = voucher_id; }
    let setTime = function(time) { _time = time; }

    let toString = function() {
        return "id: " + _id + " coin_use_type_id: " + _coin_use_type_id + " customer_id: " + _customer_id +
            " voucher_id: " + _voucher_id + " time" + _time;
    }

    let getJson = function() {
        return { id: _id, coin_use_type_id: _coin_use_type_id, customer_id: _customer_id,
            voucher_id: _voucher_id, time: _time };
    }

    return {
        getId,
        getCoinUseTypeId,
        getCustomerId,
        getVoucherId,
        getTime,
        setId,
        setCoinUseTypeId,
        setCustomerId,
        setVoucherId,
        setTime,
        toString,
        getJson
    };
}

let create = function (){
    return new coin_history(-1, -1, -1, -1,0);
}

let createFromJson = function (json){
    return new coin_history(json.id, json.coin_use_type_id, json.customer_id, json.voucher_id, json.time);
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