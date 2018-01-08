DROP DATABASE IF EXISTS bamazonDB;

CREATE DATABASE bamazonDB;

USE bamazonDB;

CREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(45) NOT NULL,
  department_name VARCHAR(45),
  price DECIMAL(10,2) NOT NULL,
  quantity INT(10) NULL,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, quantity)
VALUES ("Eloquent Javascript", "Book", 10.5, 50);

INSERT INTO products (product_name, department_name, price, quantity)
VALUES ("FitBit", "Technology", 100, 80),
  ("Eloquent Javascript", "Books", 9.5, 20),
	("Into Thin Air", "Books", 10.95, 50),
	("Dunkirk", "Movies", 15, 200),
  ("Logan", "Movies", 10, 100),
  ("Star Wars", "Movies", 20, 150),
  ("Air Pods", "Technology", 120, 500),
  ("Microsoft Surface", "Technology", 299.99, 250),
  ("Nike Hat", "Clothing", 22.95, 400),
  ("Under Armour Shirt", "Clothing", 65, 1000),
  ("Carhartt Pants", "Clothing", 55, 800),
  ("Almond Milk", "Groceries", 3.75, 80),
  ("Rye Bread", "Groceries", 2.99, 20),
  ("Organic Chicken", "Groceries", 11.95, 50),
  ("Dog Food", "Groceries", 10, 500);

SELECT * FROM products;