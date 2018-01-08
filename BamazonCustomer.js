var mysql = require ("mysql");
var inquirer = require("inquirer");
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
    // console.log("connected as id " + connection.threadId);
});

// connection sucessfully established
// =======================================================================================


// display all of the items available for sale
//  Include the ids, names, and prices of products for sale.

// The app should then prompt users with two messages.

// The first should ask them the ID of the product they would like to buy.

inquirer.prompt([{
    type: "input",
    name: "theme",
    message: "What is the ID of the item you would like to purchase?"
}]).then(function (answer) {
    // write statement to select the line from the products table
});


// The second message should ask how many units of the product they would like to buy.
inquirer.prompt([{
    type: "input",
    name: "theme",
    message: "How many units would you like to purchase?"
}]).then(function (answer) {
    // check if the table has enough of the product to meet the customer's request.
    if (answer > res.quantity) {
        console.log("Sorry, we don't have that many available")
    } else {
        
    }
    // if quantity requested is available write statement to subtract the number of units purchased from the table
});



// If not, the app should log a phrase like Insufficient quantity!, and then prevent the order from going through.
// However, if your store does have enough of the product, you should fulfill the customer's order.
// This means updating the SQL database to reflect the remaining quantity.
// Once the update goes through, show the customer the total cost of their purchase.