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

// Then create a Node application called bamazonCustomer.js. Running this application will first display all of the items available for sale.
//  Include the ids, names, and prices of products for sale.

// The app should then prompt users with two messages.

// The first should ask them the ID of the product they would like to buy.

inquirer.prompt([{
    type: "list",
    name: "theme",
    message: "What is the ID of the item you would like to purchase?",
    choices: [
        "Post Auction",
        "Place Bid"
    ]
}]).then(function (answer) {
    if (answer.theme === "Post Auction") {
    // run post auction function
        addToAuctionList();
    }else {
    // run place bid function
        promptUserWhichProduct();
    }
});


// The second message should ask how many units of the product they would like to buy.
// Once the customer has placed the order, your application should check if your store has enough of the product to meet the customer's request.
// If not, the app should log a phrase like Insufficient quantity!, and then prevent the order from going through.
// However, if your store does have enough of the product, you should fulfill the customer's order.
// This means updating the SQL database to reflect the remaining quantity.
// Once the update goes through, show the customer the total cost of their purchase.