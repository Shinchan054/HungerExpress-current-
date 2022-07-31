
function cart_item(id, item_id, cart_id, total_price, count){
    let _id = id;
    let _item_id = item_id;
    let _cart_id = cart_id;
    let _total_price = total_price;
    let _count = count;

    let getId = function () { return _id; }
    let getItemId = function() { return _item_id; }
    let getCartId = function() { return _cart_id; }
    let getTotalPrice = function() { return _total_price; }
    let getCount = function() { return _count; }

    let setId = function(id) { _id = id; }
    let setItemId = function(item_id) { _item_id = item_id; }
    let setCartId = function(cart_id) { _cart_id = cart_id; }
    let setTotalPrice = function(total_price) { _total_price = total_price; }
    let setCount = function(count) { _count = count; }

    let toString = function() {
        return "id: " + _id + " item_id: " + _item_id + " cart_id: " + _cart_id +
            " total_price: " + _total_price + " count" + _count;
    }

    let getJson = function() {
        return { id: _id, item_id: _item_id, cart_id: _cart_id,
            total_price: _total_price, count: _count };
    }

    return {
        getId,
        getItemId,
        getCartId,
        getTotalPrice,
        getCount,
        setId,
        setItemId,
        setCartId,
        setTotalPrice,
        setCount,
        toString,
        getJson
    };
}

let create = function (){
    return new cart_item(-1, -1, -1, 0,0);
}

let createFromJson = function (json){
    return new cart_item(json.id, json.item_id, json.cart_id, json.total_price, json.count);
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