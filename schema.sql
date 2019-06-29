DROP DATABASE IF EXISTS bamazon_db;

CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products (
item_id INTEGER NOT NULL AUTO_INCREMENT,
product_name VARCHAR (100),
department_name VARCHAR (100),
price INTEGER,
stock_quantity INTEGER, 
PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Mascara", "Beauty", 10, 2);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Cat Food", "Pet", 15, 7);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Throw Pillow", "Home", 25, 3);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Lamp", "Home", 10, 14);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Lipstick", "Beauty", 7, 22);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Exercise Ball", "Health", 30, 7);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("Laptop Case", "Business", 35, 1);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Vitamins", "Health", 15, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Iron", "Home", 25, 30);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Hair Straightener", "Beauty", 35, 10);


select * from products;








