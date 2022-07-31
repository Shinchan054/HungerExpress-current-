
function payment_info(id, order_id, account_no, type, payment_time, transaction_id){
    let _id = id;
    let _order_id = order_id;
    let _account_no = account_no;
    let _type = type;
    let _payment_time = payment_time;
    let _transaction_id = transaction_id;

    let getId = function () { return _id; }
    let getOrderId = function() { return _order_id; }
    let getAccountNo = function() { return _account_no; }
    let getType = function() { return _type; }
    let getPaymentTime = function() { return _payment_time; }
    let getTransactionId = function() { return _transaction_id; }

    let setId = function(id) { _id = id; }
    let setOrderId = function(order_id) { _order_id = order_id; }
    let setAccountNo = function(account_no) { _account_no = account_no; }
    let setType = function(type) { _type = type; }
    let setPaymentTime = function(payment_time) { _payment_time = payment_time; }
    let setTransactionId = function(transaction_id) { _transaction_id = transaction_id; }

    let toString = function() {
        return "id: " + _id + " order_id: " + _order_id + " account_no: " + _account_no + " type: " + _type +
                " payment_time: " + _payment_time + " transaction_id: " + _transaction_id;
    }

    let getJson = function() {
        return { id: _id, order_id: _order_id, account_no: _account_no, type: _type, payment_time: _payment_time, transaction_id: _transaction_id }
    }

    return {
        getId,
        getOrderId,
        getAccountNo,
        getType,
        getPaymentTime,
        getTransactionId,
        setId,
        setOrderId,
        setAccountNo,
        setType,
        setPaymentTime,
        setTransactionId,
        toString,
        getJson
    };
}

let create = function (){
    return new payment_info(-1, "", "", "", "", "");
}

let createFromJson = function (json){
    return new payment_info(json.id, json.order_id, json.account_no, json.type, json.payment_time, json.transaction_id);
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