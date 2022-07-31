
function item_image(id, item_id, image_id){
    let _id = id;
    let _item_id = item_id;
    let _image_id = image_id;

    let getId = function () { return _id; }
    let getItemId = function() { return _item_id; }
    let getImageId = function() { return _image_id; }

    let setId = function(id) { _id = id; }
    let setItemId = function(item_id) { _item_id = item_id; }
    let setImageId = function(image_id) { _image_id = image_id; }

    let toString = function() {
        return "id: " + _id + " item_id: " + _item_id + " image_id: " + _image_id;
    }

    let getJson = function() {
        return { id: _id, item_id: _item_id, image_id: _image_id };
    }

    return {
        getId,
        getItemId,
        getImageId,
        setId,
        setItemId,
        setImageId,
        toString,
        getJson
    };
}

let create = function (){
    return new item_image(-1, "", 0);
}

let createFromJson = function (json){
    return new item_image(json.id, json.item_id, json.image_id);
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