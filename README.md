# Bamazon-NBA-Playoffs-Edition
I've created an Amazon-like storefront using MySQL and Node, specializing in products celebrating the 2018 NBA Playoffs. 

The app takes in orders from customers, checks to see if there is enough product in stock, depletes from the store inventory, and, lastly, displays what the customer will be charged. This application runs entirely through a computer's command line or terminal.

### 1) Initialize Node
To run the application locally, please initialize node from your terminal or command line: `npm init`

### 2) Create the Database
Then, copy and paste the code in _bamazonSeeds.sql_ file into your favorite MySQL GUI tool.

> PC users might try [MySQL Workbench](https://www.mysql.com/products/workbench/).
> Mac users could use [Sequel Pro](https://www.sequelpro.com/).

This will create the MySQL database (picture the MySQL database as a big Excel spreadsheet): `<copy & paste>bamazonSeeds.sql` then `command R`

<img width="518" alt="create database" src="https://user-images.githubusercontent.com/34424478/40072125-d06be416-5840-11e8-8f73-feb9b3d54d9c.png">

### 3) Create the Table
A MySQL table is a bit like an individual tab or sheet on an Excel spreadsheet. Now, we need to create the table which will hold our product inventory, and fill it with each product for sale. Do this by copying and pasting the code in _bamazonSchema.sql_: `<copy & paste>bamazonSchema.sql` then `command R`

<img width="706" alt="create table" src="https://user-images.githubusercontent.com/34424478/40072126-d0790114-5840-11e8-991e-25a04f414085.png">

### 4) Time to Shop!
Now, it's time to see the products available. To do this, make sure you're in the _Bamazon_ application folder, and run _bamazonCustomer.js_: `node bamazonCustomer.js`

<img width="504" alt="which item" src="https://user-images.githubusercontent.com/34424478/40072132-d0c00046-5840-11e8-8187-e8f510d20e41.png">

The store's inventory will display in a table, followed by the prompt _Which item would you like? Type the item ID and hit enter._ Perhaps you want some Beard Oil as a keepsake from this year's playoff's run? 

![harden](https://user-images.githubusercontent.com/34424478/40072127-d082549e-5840-11e8-819b-2980720fd567.jpg)

Enter the correct Item ID (in this case, _7_) followed by the quantity desired. `<item ID desired>` and `<quantity desired>`

