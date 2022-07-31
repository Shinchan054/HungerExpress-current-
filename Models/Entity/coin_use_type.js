
function coin_use_type(id, admin_id, available_data, coin_amount, voucher_amount){
    let _id = id;
    let _admin_id = admin_id;
    let _available_data = available_data;
    let _coin_amount = coin_amount;
    let _voucher_amount = voucher_amount;

    let getId = function () { return _id; }
    let getAdminId = function() { return _admin_id; }
    let getAvailableData = function() { return _available_data; }
    let getCoinAmount = function() { return _coin_amount; }
    let getVoucherAmount = function() { return _voucher_amount; }

    let setId = function(id) { _id = id; }
    let setAdminId = function(admin_id) { _admin_id = admin_id; }
    let setAvailableData = function(available_data) { _available_data = available_data; }
    let setCoinAmount = function(coin_amount) { _coin_amount = coin_amount; }
    let setVoucherAmount = function(voucher_amount) { _voucher_amount = voucher_amount; }

    let toString = function() {
        return "id: " + _id + " admin_id: " + _admin_id + " available_data: " + _available_data +
            " coin_amount: " + _coin_amount + " voucher_amount" + _voucher_amount;
    }

    let getJson = function() {
        return { id: _id, admin_id: _admin_id, available_data: _available_data,
            coin_amount: _coin_amount, voucher_amount: _voucher_amount };
    }

    return {
        getId,
        getAdminId,
        getAvailableData,
        getCoinAmount,
        getVoucherAmount,
        setId,
        setAdminId,
        setAvailableData,
        setCoinAmount,
        setVoucherAmount,
        toString,
        getJson
    };
}

let create = function (){
    return new coin_use_type(-1, -1, "", 0,0);
}

let createFromJson = function (json){
    return new coin_use_type(json.id, json.admin_id, json.available_data, json.coin_amount, json.voucher_amount);
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