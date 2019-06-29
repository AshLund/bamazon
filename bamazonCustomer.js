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
    console.log("connected as id " + connection.threadId + "\n");
    bamazonItems();
  });


  function bamazonItems () {
    connection.query("SELECT * FROM products", function(err, results) {
        if (err) throw err;
        for (var i=0; i<results.length; i++) {
            console.log("Item Id:" +  " " + results[i].item_id)
            console.log("Product Name:" +  " " + results[i].product_name)
            console.log("Department:" + " " + results[i].department_name)
            console.log("Price: $" + results[i].price + "\n")
    
    // connection.end();
        }

  })
}