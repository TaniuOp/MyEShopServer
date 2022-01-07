-- **** PRODUCTS ****
CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(200) NOT NULL,
    img VARCHAR(2550),
    price VARCHAR(30),
    reviews VARCHAR (100), 
    fk_id_manufacturer VARCHAR(30),
    created timestamp NOT NULL DEFAULT now(),
    FOREIGN KEY (fk_id_manufacturer) REFERENCES manufacturer(id)       
);

INSERT INTO products(name, img, price, reviews, fk_id_manufacturer)
VALUES 
('NoTestManu', 'https://64.media.tumblr.com/bd4e83517590e8f670f10c0ab95ce8e7/tumblr_mk9xsvoLeg1r9zvago1_1280.jpg', '20€', '5', '0')

SELECT * FROM products;

-- DROP TABLE users 

-- **** MANUFACTURER ****
CREATE TABLE manufacturer
(
    id SERIAL PRIMARY KEY,
    name VARCHAR (500) NOT NULL, 
    cif VARCHAR (500) NOT NULL,
    address VARCHAR (500),
    image VARCHAR (2550)
);

INSERT INTO manufacturer(name, cif, address, image)
VALUES 
('Lokut', 'C-124334567', 'Barcelona', 'https://api.elephantsql.com/img/turtle_256.png')

SELECT * FROM manufacturer;

-- DROP TABLE manufacturer 


-- ***** Filters / Search from tables *****
SELECT * FROM products as P
INNER JOIN manufacturer as M
on P.fk_id_manufacturer=M.id;

SELECT * FROM products as P
INNER JOIN manufacturer as M
on P.fk_id_manufacturer=M.id 
WHERE M.id=2;

SELECT P.*, M.* FROM products as P
INNER JOIN manufacturer as M
on P.fk_id_manufacturer=M.id 
WHERE M.id=2;