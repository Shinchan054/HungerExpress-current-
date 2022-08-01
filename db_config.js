const Pool = require('pg').Pool;

const pool = new Pool({
            user: "postgres",
            password: "tanmoy",                       //      postgres password
            database: "HungerExpress",              //      DATABASE name
            host: "localhost",
            port: 5432                              //      POSTGRES port
    }
);

module.exports = pool;