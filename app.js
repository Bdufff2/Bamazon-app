var mysql = require ("mysql");
var mySQLPassword = require ("./password.js");

// establish database connection
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: mySQLPassword,
    database: "bamazonDB"
});

// test database connection
connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
});

