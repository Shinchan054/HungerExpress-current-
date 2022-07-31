
function item_addon(id, item_id, addon_id){
    let _id = id;
    let _item_id = item_id;
    let _addon_id = addon_id;

    let getId = function () { return _id; }
    let getItemId = function() { return _item_id; }
    let getAddonId = function() { return _addon_id; }

    let setId = function(id) { _id = id; }
    let setItemId = function(item_id) { _item_id = item_id; }
    let setAddonId = function(addon_id) { _addon_id = addon_id; }

    let toString = function() {
        return "id: " + _id + " item_id: " + _item_id + " addon_id: " + _addon_id;
    }

    let getJson = function() {
        return { id: _id, item_id: _item_id, addon_id: _addon_id };
    }

    return {
        getId,
        getItemId,
        getAddonId,
        setId,
        setItemId,
        setAddonId,
        toString,
        getJson
    };
}

let create = function (){
    return new item_addon(-1, "", 0);
}

let createFromJson = function (json){
    return new item_addon(json.id, json.item_id, json.addon_id);
}

let createArrayFromJson = function (jsonArray){
    let array = [];
    for(let i=0; i<jsonArray.length; i++){
        array.push(createFromJson(jsonArray[i]));
    }
    return array;
}


module.exports = {
    create,
    createFromJson,
    createArrayFromJson
};