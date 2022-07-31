
let pool = require('./../db_config');
let pgFormat = require('pg-format');



// data = await retrieve_data_conditional("addon", ["id", "name"]);
async function retrieve_data(table_name, column_names){
    try{
        let query = "SELECT ";
        for(let i=0; i<column_names.length; i++){
            query += column_names[i];
            if(i < column_names.length-1) query += ", ";
        }
        query += " FROM " + table_name + ";";

        let result = await pool.query(query);
        return {status: true, data: result.rows};
    }catch (e){
        console.log("Error in retrieve_data: " + e);
        return {status: false, data: [], error: e};
    }
}


// let data = await retrieve_data_conditional("voucher", ["order_id", "time", "coin_history_id"],
//     {column_name: ["order_id", "time", "coin_history_id"], rel: ["=", "=", "!="],
//              value: [100, "2022-03-31 19:44:49.368216", null]});
async function retrieve_data_conditional(table_name, column_names, condition){
    try{
        let query = "SELECT ";
        for(let i=0; i<column_names.length; i++){
            query += column_names[i];
            if(i < column_names.length-1) query += ", ";
        }
        query += " FROM " + table_name;
        if(condition.column_name.length > 0) query += " WHERE ";
        for(let i=0; i<condition.column_name.length; i++){
            if(condition.value[i] != null) query += condition.column_name[i] + " " + condition.rel[i] + " %L";
            else {
                query += condition.column_name[i] + " IS ";
                if(condition.rel[i] == "!=") query += "NOT ";
                query += "null";
            }
            if(i < condition.column_name.length-1) query += " AND ";
        }
        let result = await pool.query(pgFormat.withArray(query, condition.value));
        return {status: true, data: result.rows};
    }catch (e){
        console.log("Error in retrieve_data_conditional: " + e);
        return {status: false, data: [], error: e};
    }


}


// pool_data = await SqlHelper.retrieve_data_conditional("category", ["id", "name"],
//     {column_name: ["restaurant_id"], value: [restaurant_id], rel: ["="]} );
async function retrieve_data_join(table_name_1, table_name_2, column_names_1, column_names_2, condition){
    try{
        let query = "SELECT ";
        for(let i=0; i<column_names_1.length; i++) {
            query += table_name_1 + "." + column_names_1[i];
            if(column_names_2.length == 0 && i == column_names_1.length-1) continue;
            else query += ", ";
        }

        for(let i=0; i<column_names_2.length; i++) {
            query += table_name_2 + "." + column_names_2[i];
            if(i == column_names_2.length-1) continue;
            else query += ", ";
        }

        query += " FROM " + table_name_1 + " INNER JOIN " + table_name_2 + " ON (";
        for(let i=0; i<condition.column_1.length; i++){
            query += table_name_1 + "." + condition.column_1[i]
                + condition.rel[i] + table_name_2 + "." + condition.column_2[i];
            if(i < condition.column_1.length-1) query += " AND ";
        }
        query += ");";

        let result = await pool.query(query);
        return {status: true, data: result.rows};
    }catch (e){
        console.log("Error in retrieve_data_join: " + e);
        return {status: false, data: [], error: e};
    }
}


// let ret = await create_record("voucher", voucher);
async function create_record(table_name, object){
    try{

        let columns = await pool.query(pgFormat("SELECT column_name FROM INFORMATION_SCHEMA.COLUMNS " +
            " WHERE table_name = %L;", table_name));
        let query = "INSERT INTO " + table_name + "(";
        for(let i=1; i<columns.rows.length; i++){
            query += columns.rows[i].column_name;
            if(i < columns.rows.length-1) query += ", ";
        }
        query += ") VALUES(";
        for(let i=1; i<columns.rows.length; i++){
            query += "%L";
            if(i < columns.rows.length-1) query += ", ";
        }
        query += ");";

        let json = object.getJson();
        let data = [];

        for(let i=1; i<columns.rows.length; i++){
            let col = columns.rows[i].column_name;
            for(let key in json){
                if(key == col){
                    data.push(json[key]);
                    break;
                }
            }
        }
        await pool.query(pgFormat.withArray(query, data));

        //  retrieving id

        let column_name = [];
        let value = [];
        let rel = [];

        for(let i=1; i<columns.rows.length; i++){
            column_name.push(columns.rows[i].column_name);
            rel.push("=");
            value.push(data[i-1]);
        }
        let ret_data = await retrieve_data_conditional(table_name, ["id"],
            { column_name: column_name, value: value, rel: rel});

        let id = ret_data.data[0].id;
        return {success: true, id: id};
    }catch (e){
        console.log("Error in create_record: " + e);
        return {success: false, error: e};
    }
}


// let ret = await delete_record("voucher", 6);
async function delete_record(table_name, id){
    try{
        query = "DELETE FROM " + table_name + " WHERE id = " + id;

        await pool.query(query);
        return {success: true};
    }catch (e){
        console.log("Error in delete_record: " + e);
        return {success: false};
    }
}


// let ret = await update_record("voucher", 2, {column_names: ["coin_history_id"], value: [100]})
async function update_record(table_name, id, data){
    try{
        let query = "UPDATE " + table_name + " SET ";
        for(let i=0; i<data.column_names.length; i++){
            query += data.column_names[i] + " = %L";
            if(i < data.column_names.length-1) query += ", ";
            else query += " ";
        }
        query += "WHERE id = %L;";

        let arr = data.value;
        arr.push(id);

        await pool.query( pgFormat.withArray(query, arr) );
        return {success: true};
    }catch (e){
        console.log("Error in update_record: " + e);
        return {success: false};
    }
}


// let max_image_id = SqlHelper.get_max("item_image", "image_id",
//     { column_name:[], value:[], rel:[]});
async function get_max(table_name, column_name, condition){
    try{
        let query = "SELECT MAX(" + column_name + ") FROM " + table_name;
        if (condition.column_name.length > 0) query += " WHERE "

        for(let i=0; i<condition.column_name.length; i++){
            let col = condition.column_name[i];
            let rel = condition.rel[i];

            query += col + " " + rel + " %L";
            if(i < condition.column_name.length-1) query += " AND ";
        }
        query += ";";

        let result = await pool.query(query, condition.value);
        return {status: true, data: result.rows};
    }catch (e){
        console.log("Error in get_max: " + e);
        return {status: false, data: [], error: e};
    }
}




module.exports={
    retrieve_data,
    retrieve_data_join,
    retrieve_data_conditional,
    create_record,
    delete_record,
    update_record,
    get_max
}