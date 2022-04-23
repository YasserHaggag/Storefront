/* Replace with your SQL commands */
CREATE TABLE products (
    id SERIAL PRIMARY  KEY,
    pname VARCHAR(150),
    price decimal,
    pdescription text,
    order_id int REFERENCES orders(id)
);