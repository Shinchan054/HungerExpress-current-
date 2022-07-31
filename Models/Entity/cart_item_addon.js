
function cart_item_addon(id, cart_item_id, addon_id, total_price, count){
    let _id = id;
    let _cart_item_id = cart_item_id;
    let _addon_id = addon_id;
    let _total_price = total_price;
    let _count = count;

    let getId = function () { return _id; }
    let getCartItemId = function() { return _cart_item_id; }
    let getAddonId = function() { return _addon_id; }
    let getTotalPrice = function() { return _total_price; }
    let getCount = function() { return _count; }

    let setId = function(id) { _id = id; }
    let setCartItemId = function(cart_item_id) { _cart_item_id = cart_item_id; }
    let setAddonId = function(addon_id) { _addon_id = addon_id; }
    let setTotalPrice = function(total_price) { _total_price = total_price; }
    let setCount = function(count) { _count = count; }

    let toString = function() {
        return "id: " + _id + " cart_item_id: " + _cart_item_id + " addon_id: " + _addon_id +
            " total_price: " + _total_price + " count" + _count;
    }

    let getJson = function() {
        return { id: _id, cart_item_id: _cart_item_id, addon_id: _addon_id,
            total_price: _total_price, count: _count };
    }

    return {
        getId,
        getCartItemId,
        getAddonId,
        getTotalPrice,
        getCount,
        setId,
        setCartItemId,
        setAddonId,
        setTotalPrice,
        setCount,
        toString,
        getJson
    };
}

let create = function (){
    return new cart_item_addon(-1, -1, -1, 0,0);
}

let createFromJson = function (json){
    return new cart_item_addon(json.id, json.cart_item_id, json.addon_id, json.total_price, json.count);
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