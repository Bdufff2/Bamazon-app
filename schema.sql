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
  ("Logan", "Movies", 10, 200),
  ("Star Wars", "Movies", 20, 200),
  ("Air Pods", "Technology", 120, 500),
  ("Microsoft Surface", "Technology", 250, 500);

SELECT * FROM products;