# Bamazon-NBA-Playoffs-Edition
I've created an Amazon-like storefront using MySQL and Node, specializing in products celebrating the 2018 NBA Playoffs. 

The app takes in orders from customers, checks to see if there is enough product in stock, depletes from the store inventory, and lastly, displays how much the order will cost. This application runs entirely through a computer's command line or terminal.

### 1) Initialize Node
To run the application locally, please initialize node from your terminal or command line: `npm init`

### 2) Create the Database
Then, copy and paste the code in _bamazonSeeds.sql_ file into your favorite MySQL GUI tool.

> PC users might want [MySQL Workbench](https://www.mysql.com/products/workbench/).
> Mac users might like [Sequel Pro](https://www.sequelpro.com/).

This will create the MySQL database (picture the MySQL database as a big Excel spreadsheet).

<img width="518" alt="create database" src="https://user-images.githubusercontent.com/34424478/40072125-d06be416-5840-11e8-8f73-feb9b3d54d9c.png">

### 3) Create the Table
Now, we need to create the table which will hold our product inventory, and fill it with each product for sale. A MySQL table is a bit like a tab or sheet on an Excel spreadsheet. Do this by copying and pasting the code in _bamazonSchema.sql_.

<img width="706" alt="create table" src="https://user-images.githubusercontent.com/34424478/40072126-d0790114-5840-11e8-991e-25a04f414085.png">

### 4) Time to Shop!
Now, it's time to see the products available. To do this, make sure you're in the _Bamazon_ application folder, and run _bamazonCustomer.js_: `node bamazonCustomer.js`

<img width="504" alt="which item" src="https://user-images.githubusercontent.com/34424478/40072132-d0c00046-5840-11e8-8187-e8f510d20e41.png">

The store's inventory will display in a table, followed by the prompt _Which item would you like? Type the item ID and hit enter._ Perhaps you want some Beard Oil as a keepsake from this year's playoff's run? 

![harden](https://user-images.githubusercontent.com/34424478/40072127-d082549e-5840-11e8-819b-2980720fd567.jpg)

Enter the correct Item ID (in this case, _7_) followed by the quantity desired. `<item ID desired>` and `<quantity desired>`

You will then be given a total cost for your order. Refreshing the MySQL table will show the change in store inventory in the fifth column, _stock_quantity_. 

![before order](https://user-images.githubusercontent.com/34424478/40072124-d0601f00-5840-11e8-9131-d594b655c12a.jpg)
![after order](https://user-images.githubusercontent.com/34424478/40072123-d04a1066-5840-11e8-8042-73b4251adabf.jpg)

### 5) Sold Out?
But, you are not alone in loving the NBA. What happens if our NBA Playoffs store is out of that product?

There are only 5 customized Joel Embiid jerseys, for instance. What happens if you try to order one for everybody on your Rec League team (because they are AWESOME)?

![embiid](https://user-images.githubusercontent.com/34424478/40072954-785260b8-5843-11e8-8f54-57dee9cc27a4.jpeg)

You’ll learn the store is sold out of the product.

You will have the choice to either keep shopping or to stop shopping. Entering 'yes' will start the shopping process over again, revealing the store inventory in a table and asking which item you'd like. 

<img width="452" alt="sold out" src="https://user-images.githubusercontent.com/34424478/40072131-d0b1b46e-5840-11e8-9aa4-ee503ce7a592.png">

Entering 'no' prompts a simple "have a nice day". Thank you for visiting my application!

<img width="449" alt="have a nice day" src="https://user-images.githubusercontent.com/34424478/40072128-d08d2680-5840-11e8-82c2-58f7622fb845.png">
