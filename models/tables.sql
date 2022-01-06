-- Add products table 
CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(200) NOT NULL,
    img VARCHAR(2550),
    price VARCHAR(30),
    reviews VARCHAR (100), 
    fk_id_manufacturer SERIAL,
    created timestamp NOT NULL DEFAULT now(),
    FOREIGN KEY (fk_id_manufacturer) REFERENCES manufacturer(id)       
);

-- DROP TABLE users 

INSERT INTO products(name, img, price, reviews, fk_id_manufacturer)
VALUES 
('Black&White', 'https://64.media.tumblr.com/bd4e83517590e8f670f10c0ab95ce8e7/tumblr_mk9xsvoLeg1r9zvago1_1280.jpg', '20€', '5', '1')


SELECT * FROM products;

--Add manufacturer table

CREATE TABLE manufacturer
(
    id SERIAL PRIMARY KEY,
    name VARCHAR (500) NOT NULL, 
    cif VARCHAR (500) NOT NULL,
    address VARCHAR (500),
    image VARCHAR (2550)
);

-- DROP TABLE manufacturer 

INSERT INTO manufacturer(name, cif, address, image)
VALUES 
('Elephant', 'C-1234567', 'Azure on cloud', 'https://api.elephantsql.com/img/turtle_256.png'),

SELECT * FROM manufacturer;