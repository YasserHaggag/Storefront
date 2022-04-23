/* Replace with your SQL commands */
CREATE TABLE orders_products (
    id SERIAL PRIMARY KEY,
     product_id int REFERENCES products(id),
    order_id int REFERENCES orders(id),
   
    quantity integer NOT NULL
);