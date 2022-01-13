-- **** PRODUCTS ****
CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    fk_id_manufacturer INTEGER,
    title VARCHAR(200) NOT NULL,
    price VARCHAR(30),
    description VARCHAR(1000), 
    category VARCHAR(200),
    image VARCHAR(2550),
    reviews VARCHAR (100), 
    --created timestamp NOT NULL DEFAULT now(),
    FOREIGN KEY (fk_id_manufacturer) REFERENCES manufacturer(id)       
);

-- Insert one product 
INSERT INTO products(name, img, price, reviews, fk_id_manufacturer)
VALUES 
('NoTestManu', 'https://64.media.tumblr.com/bd4e83517590e8f670f10c0ab95ce8e7/tumblr_mk9xsvoLeg1r9zvago1_1280.jpg', '20€', '5', '0')

-- Insert JSON products 
INSERT INTO products
SELECT * 
FROM json_populate_recordset (NULL::products,
   '[
    {
    "id": 1,
    "fk_id_manufacturer": 1,
    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price": 109.95,
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "category": "mens clothing",
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    "reviews": 3.9
}  
]')


SELECT * FROM products;

-- DROP TABLE products 

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