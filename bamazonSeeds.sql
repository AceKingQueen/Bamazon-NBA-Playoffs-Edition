DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
    item_id int not null auto_increment,
    product_name varchar (150) null,
    department_name varchar (150) null,
    price decimal (10, 2) null,
    stock_quantity int null, 
    primary key (item_id)
);

