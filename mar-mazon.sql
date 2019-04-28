DROP DATABASE IF EXISTS mar_mazon_db;

CREATE DATABASE mar_mazon_db;

USE mar_mazon_db;

CREATE TABLE products(
	item_id INT NOT NULL AUTO_INCREMENT,
    PRIMARY KEY(item_id),
    product_name VARCHAR(50) NOT NULL,
	department_name VARCHAR(50) NOT NULL,
    price INT NOT NULL,
    stock_quantity INT NOT NULL
    );
    
INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ("Storm-Breaker", "Thanos killing weapon", 1000000, 1);

INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ("Inifinty Stones", "Dangerous Accessories", 6000000, 6);

INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ("Pym Particles", "Clock Fixing Tools", 500000, 24);    

INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ("Iron Man Suits", "Dangerous Accessories", 100000, 70);

INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ("Ashes of the enemy", "Keys to victory", 1, 100000000);

INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ("Thanos Deathes", "Keys to Victory", 20000000, 2);

INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ("Possible Outcomes", "Dr Stange Predictions", 100, 14000605);

INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ("Days Adrift in Space", "In Need of Rescue", 5005, 22);

INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ("Time Heists", "Keys to Victory", 800000000, 1);

INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ("Heroic Sacrifice", "Keys to Victory", 13000, 2);

SELECT * FROM products;