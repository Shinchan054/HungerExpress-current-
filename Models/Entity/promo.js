
function promo(id, promo_type_id, admin_id, min_amount, max_count, start_time, finish_time){
    let _id = id;
    let _promo_type_id = promo_type_id;
    let _admin_id = admin_id;
    let _min_amount = min_amount;
    let _max_count = max_count;
    let _start_time = start_time;
    let _finish_time = finish_time;

    let getId = function () { return _id; }
    let getPromoTypeId = function() { return _promo_type_id; }
    let getAdminId = function() { return _admin_id; }
    let getMinAmount = function() { return _min_amount; }
    let getMaxCount = function() { return _max_count; }
    let getStartTime = function() { return _start_time; }
    let getFinishTime = function() { return _finish_time; }

    let setId = function(id) { _id = id; }
    let setPromoTypeId = function(promo_type_id) { _promo_type_id = promo_type_id; }
    let setAdminId = function(admin_id) { _admin_id = admin_id; }
    let setMinAmount = function(min_amount) { _min_amount = min_amount; }
    let setMaxCount = function(max_count) { _max_count = max_count; }
    let setStartTime = function(start_time) { _start_time = start_time; }
    let setFinishTime = function(finish_time) { _finish_time = finish_time; }

    let toString = function() {
        return "id: " + _id + " promo_type_id: " + _promo_type_id + " admin_id: " + _admin_id + " min_amount: " + _min_amount +
                " max_count: " + _max_count + " start_time: " + _start_time + " finish_time: " + _finish_time;
    }

    let getJson = function() {
        return { id: _id, promo_type_id: _promo_type_id, admin_id: _admin_id, min_amount: _min_amount, max_count: _max_count,
            start_time: _start_time, finish_time: _finish_time}
    }

    return {
        getId,
        getPromoTypeId,
        getAdminId,
        getMinAmount,
        getMaxCount,
        getStartTime,
        getFinishTime,
        setId,
        setPromoTypeId,
        setAdminId,
        setMinAmount,
        setMaxCount,
        setStartTime,
        setFinishTime,
        toString,
        getJson
    };
}

let create = function (){
    return new promo(-1, "", "", "", "", "", "");
}

let createFromJson = function (json){
    return new promo(json.id, json.promo_type_id, json.admin_id, json.min_amount, json.max_count, json.start_time, json.finish_time);
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