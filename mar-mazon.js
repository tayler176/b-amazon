var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 8889,
    user: "root",
    password: "root",
    database: "mar_mazon_db"
});

function Start() {
    connection.connect(function (err) {
        readProducts();
        if (err) throw err;
        startProject();
    });
};

Start();

function startProject() {
    inquirer
        .prompt([
            {
                name: "buyThing",
                type: "input",
                message: "What item would you like to purchase, please use the items ID number?",
            },
            {
                name: "howMuchThings",
                type: "input",
                message: "How many of that item would you like to buy?"
            }
        ])
        .then(function (answer) {
            let item = answer.buyThing;
            let quanity = answer.howMuchThings;
            console.log("You have placed an order for ID #" + item + " the quanity amount of: " + quanity + " units");
            checkingStores();
            function checkingStores() {
                console.log("We are currently checking stores the that item...")
                connection.query("SELECT * FROM products WHERE ?", { item_id: item }, function (err, results) {
                    if (err) throw err;
                    var chosenItem;
                    for (var i = 0; i < results.length; i++) {
                        chosenItem = results[i];
                        if (chosenItem.stock_quantity >= quanity) {
                            let price = quanity * chosenItem.price;
                            let newQuanity = chosenItem.stock_quantity - quanity;
                            connection.query("UPDATE products SET ? WHERE item_id = ?",
                                [{ stock_quantity: newQuanity },
                                chosenItem.item_id], function (err) {
                                    if (err) throw (err);
                                    console.log("product is being devilered")
                                    console.log("Your Purchase went through!" + "\nYour total for this purhcase is " + price);
                                    console.log("There are now " + newQuanity + " left")
                                    connection.end();
                                });



                        } else {
                            console.log("There is not enough stock for a purchase this large");
                            connection.end();
                        }
                    }
                }
                )
            };
        });
};

function readProducts() {
    console.log("Selecting all products...\n");
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        console.log(res);
    });
};
