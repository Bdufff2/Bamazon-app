// pull necessary dependencies into application
var mysql = require("mysql");
var inquirer = require("inquirer");
var mySQLPassword = require("./password.js");

// establish database connection
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,

    // insert your username and password
    user: "root",
    password: mySQLPassword,

    database: "bamazonDB"
});

// test database connection
connection.connect(function (err) {
    if (err) throw err;
    // console.log("connected as id " + connection.threadId);
});


function initialPrompt() {
    inquirer.prompt([{
        type: "input",
        name: "item_id",
        message: "What is the Item ID of the product you would like to purchase?"
    },
    {
        type: "input",
        name: "quantity",
        message: "How many units would you like to purchase?"
    }]).then(function (answer) {
        // console.log('Customer has selected: \n    item_id = '  + answer.item_id + '\n    quantity = ' + answer.quantity);

        var item = answer.item_id;
        var itemQuantity = answer.quantity;

        // confirm that the item quantity exists in the database
        var queryStr = 'SELECT * FROM products WHERE ?';

        connection.query(queryStr, item, function (err, res) {
            if (err) throw err;

            if (res.length === 0) {
                console.log('Error: must enter valid Item ID');
                displayInventory();
            } else {
                var productData = res[0];

                if (itemQuantity <= productData.quantity) {
                    console.log('Thanks for placing your order, we are working on it!');
                    var updateQueryStr = 'UPDATE products SET quantity = ' + (productData.quantity - itemQuantity) + ' WHERE item_id = ' + item;

                    connection.query(updateQueryStr, function(err, res){
                        if (err) throw err;
                        console.log('Your total is $' + productData.price * itemQuantity);
                        connection.end();
                    })
                } else {
                    console.log('Sorry, we do not currently have enough of that product. Please modify the quantity requested.')
                    displayInventory();
                }
            }
        })
    })
}

function displayInventory(){
    // console.log('test display inventory');
    
    queryStr = 'SELECT * FROM products';
    connection.query(queryStr, function(err, res) {
        if (err) throw err;

        console.log('Current Inventory: \n============================================================================================' );
        
        var strInventory = '';
        for (var i = 0; i < res.length; i++) {
            strInventory = '';
            strInventory += 'Item ID: ' + res[i].item_id + '  ||  ';
			strInventory += 'Product Name: ' + res[i].product_name + '  ||  ';
			strInventory += 'Department: ' + res[i].department_name + '  ||  ';
            strInventory += 'Price: $' + res[i].price + '\n';
            
            console.log(strInventory);
        }
        console.log('============================================================================================' );

        initialPrompt();
    })
}

function startApp(){
    displayInventory();
}

startApp();