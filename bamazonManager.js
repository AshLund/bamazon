var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Zorro",
    database: "bamazon_DB"
  });
  
  connection.connect(function(err) {
    if (err) throw err;
  });

inquirer
.prompt([

    {
        type: "list",
        message: "What would you like to do?",
        choices: ["View Products for Sale", "View Low Inventory", "Add to Inventory", "Add New Product"],
        name: "options",
    },
])

.then(function(inquirerResponse) {
    console.log(inquirerResponse.options)
  if (inquirerResponse.options==="View Products for Sale") {
      viewProducts();
  } else if (inquirerResponse.options==="View Low Inventory") {
      lowInventory();
  }

    })

function viewProducts () {
        connection.query("SELECT * FROM products", function(err, results) {
            if (err) throw err;
            for (var i=0; i<results.length; i++) {
                console.log("Item Id:" +  " " + results[i].item_id)
                console.log("Product Name:" +  " " + results[i].product_name)
                console.log("Department:" + " " + results[i].department_name)
                console.log("Price: $" + results[i].price)
                console.log("Quantity Remaining:" + " " + results[i].stock_quantity + "\n")
    
    
            }
})
    }

function lowInventory () {
    connection.query("SELECT * FROM products", function(err, results) {
        if (err) throw err;
        for (var i=0; i<results.length; i++) {
            if (results[i].stock_quantity <= 5){
                console.log("Item Id:" +  " " + results[i].item_id)
                console.log("Product Name:" +  " " + results[i].product_name)
                console.log("Quantity Remaining:" + " " + results[i].stock_quantity + "\n")
            }
        }
    })
}