const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    port: "8889",
    user: "todofed23",
    password: "todofed23",
    database: "todofed23"
})

module.exports = connection;


