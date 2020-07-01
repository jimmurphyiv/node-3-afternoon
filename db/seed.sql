CREATE TABLE product (   
    product_id SERIAL PRIMARY KEY,
    name VARCHAR(40),
    description VARCHAR(80),
    price INT,
    image_url TEXT  
);

INSERT INTO product 
(name, description, price, image_url )
VALUES
($1, $2, $3, $4);

