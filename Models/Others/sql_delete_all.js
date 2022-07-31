const pool = require("./../../db_config");
/**
 * DELETING ALL CONSTRAINTS OF A DATABASE
 */

let list = await pool.query(
    'SELECT A.table_name, B.constraint_name FROM INFORMATION_SCHEMA.TABLES A ' +
    ' INNER JOIN INFORMATION_SCHEMA.TABLE_CONSTRAINTS B ' +
    ' ON A.table_name = B.table_name AND B.constraint_type = \'FOREIGN KEY\' ');

for(let i=0; i<list.rows.length; i++){
    var table_name = list.rows[i].table_name;
    var cons_name = list.rows[i].constraint_name;

    var str = 'ALTER TABLE ' + table_name +
        ' DROP CONSTRAINT ' + cons_name + ';';
    pool.query(str);
}