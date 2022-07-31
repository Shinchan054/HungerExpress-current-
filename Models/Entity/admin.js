
function admin(id, name, dob, phone, email){
    let _id = id;
    let _name = name;
    let _dob = dob;
    let _phone = phone;
    let _email = email;

    let getId = function () { return _id; }
    let getName = function() { return _name; }
    let getDob = function() { return _dob; }
    let getPhone = function() { return _phone; }
    let getEmail = function() { return _email; }

    let setId = function(id) { _id = id; }
    let setName = function(name) { _name = name; }
    let setDob = function(dob) { _dob = dob; }
    let setPhone = function(phone) { _phone = phone; }
    let setEmail = function(email) { _email = email; }

    let toString = function() {
        return "id: " + _id + " name: " + _name + " dob: " + _dob + " phone: " + _phone + " email: " + _email;
    }

    let getJson = function() {
        return { id: _id, name: _name, dob: _dob, phone: _phone, email: _email };
    }

    return {
        getId,
        getName,
        getDob,
        getPhone,
        getEmail,
        setId,
        setName,
        setDob,
        setPhone,
        setEmail,
        toString,
        getJson
    };
}

let create = function (){
    return new admin(-1, "", "", "" , "");
}

let createFromJson = function (json){
    return new admin(json.id, json.name, json.dob, json.phone, json.email);
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