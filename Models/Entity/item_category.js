
function item_category(id, item_id, category_id){
    let _id = id;
    let _item_id = item_id;
    let _category_id = category_id;

    let getId = function () { return _id; }
    let getItemId = function() { return _item_id; }
    let getCategoryId = function() { return _category_id; }

    let setId = function(id) { _id = id; }
    let setItemId = function(item_id) { _item_id = item_id; }
    let setCategoryId = function(category_id) { _category_id = category_id; }

    let toString = function() {
        return "id: " + _id + " item_id: " + _item_id + " category_id: " + _category_id;
    }

    let getJson = function() {
        return { id: _id, item_id: _item_id, category_id: _category_id };
    }

    return {
        getId,
        getItemId,
        getCategoryId,
        setId,
        setItemId,
        setCategoryId,
        toString,
        getJson
    };
}

let create = function (){
    return new item_category(-1, "", 0);
}

let createFromJson = function (json){
    return new item_category(json.id, json.item_id, json.category_id);
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