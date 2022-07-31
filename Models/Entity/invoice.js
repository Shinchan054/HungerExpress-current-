
function invoice(id, order_id, vat_amount, delivery_fee, total_price){
    let _id = id;
    let _order_id = order_id;
    let _vat_amount = vat_amount;
    let _delivery_fee = delivery_fee;
    let _total_price = total_price;

    let getId = function () { return _id; }
    let getOrderId = function() { return _order_id; }
    let getVatAmount = function() { return _vat_amount; }
    let getDeliveryFee = function() { return _delivery_fee; }
    let getTotalPrice = function() { return _total_price; }

    let setId = function(id) { _id = id; }
    let setOrderId = function(order_id) { _order_id = order_id; }
    let setVatAmount = function(vat_amount) { _vat_amount = vat_amount; }
    let setDeliveryFee = function(delivery_fee) { _delivery_fee = delivery_fee; }
    let setTotalPrice = function(total_price) { _total_price = total_price; }

    let toString = function() {
        return "id: " + _id + " order_id: " + _order_id + " vat_amount: " + _vat_amount + " delivery_fee: " + _delivery_fee + " total_price: " + _total_price;
    }

    let getJson = function() {
        return { id: _id, order_id: _order_id, vat_amount: _vat_amount, delivery_fee: _delivery_fee, total_price: _total_price }
    }

    return {
        getId,
        getOrderId,
        getVatAmount,
        getDeliveryFee,
        getTotalPrice,
        setId,
        setOrderId,
        setVatAmount,
        setDeliveryFee,
        setTotalPrice,
        toString,
        getJson
    };
}

let create = function (){
    return new invoice(-1, "", "", "", "");
}

let createFromJson = function (json){
    return new invoice(json.id, json.order_id, json.vat_amount, json.delivery_fee, json.total_price);
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