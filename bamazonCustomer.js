var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require('cli-table');


var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,

    user: "root",

    password: "",
    database: "bamazon"
});
 
connection.connect(function(err) {
    if (err) throw err;
    // console.log("connected as id " + connection.threadId + "\n");
    readProducts();
});


function readProducts() {

    console.log("\nWelcome to the NBA Playoff Store. Here's what we have for sale today: \n");

    //revealing inventory    
    connection.query("SELECT * FROM products", function(err, res) {

        //table constructor
        if (err) throw err;
        var table = new Table({
            head: ['ITEM ID', 'NAME','PRICE']
          , colWidths: [10,35,10]
        });
         
        // pushing items into table array
        for (var i = 0; i < res.length; i++) {
            table.push([res[i].item_id, res[i].product_name,res[i].price]
            );           
        }

        //display table
        console.log(table.toString());
        pickItem();
    });
    
    function pickItem() {
        
        //ask the user which item they'd like
        inquirer.prompt([
                        {
                            type: "input",
                            name: "pickingItem",
                            message: "Which item would you like? Type the item ID and hit enter.",

                            //validating that a proper item ID is entered
                            validate: function (input) {
                                if (input === '') {
                                    console.log('Please enter valid Id');
                                    return false;
                                } else {
                                    return true;
                                }
                            },
                             filter: Number,          
                        },{

                            //asking user how many of the item they will need
                            type: "input",
                            name: "quantity",
                            message: "How many would you like?",  
                            validate: function (input) {
                                if (input === '') {
                                    console.log('Please enter a valid ID');
                                    return false;
                                } else {
                                    return true;
                                }
                            },
                             filter: Number,
                                
                        }
                    ]).then(function(user) {
                   
                   //variables for storing user's input     
                   var itemno = user.pickingItem;
                   var qty = user.quantity;

//compare what the user's order to the current stock held in Sequel Pro database         
connection.query("SELECT * FROM products WHERE item_id=" + itemno, function(err, res) { 
    if (err) throw err;

    //if there's enough to fulfill stock order
    if (res[0].stock_quantity > qty) {
        console.log("The product you requested is in stock.");

        //calculating total cost
        var totalCost = res[0].price * qty;

        connection.query(
            "UPDATE products SET ? WHERE ?",
            [
              {
                //updating stock quantity after user's order
                stock_quantity: (res[0].stock_quantity - qty)
              },
              {
                item_id: itemno
              }
            ],function(err,res){
                if (err) throw err;
                console.log("Your total price is $" + totalCost);
                console.log("Thank you for shopping with us"); 
            
            })
           connection.end();

        //if we don't have enough in stock to fulfill order   
        } else {
            console.log("Sorry, we have sold out of this product.")

            //give user option to keep shopping
            inquirer.prompt([
                {
                    type: "confirm",
                    name: "keepShopping",
                    message: "Would you like to keep shopping?",
                    default: "yes",
                }]).then(function(user) {

                    //if user selects "yes", start the shooping process over again
                    if (user.keepShopping === true) {
                        readProducts();
                    } else {

                       //if user selects "no", end the application.
                       console.log("Have a nice day!"); 
                    };
                    
            });
                };
    });
                    });
                };
            }
