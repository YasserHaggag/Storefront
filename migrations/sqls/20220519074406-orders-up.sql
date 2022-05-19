/* Replace with your SQL commands */
CREATE TABLE orders (
    id SERIAL PRIMARY  KEY,
    user_id int REFERENCES users(id),
    
    comments text
);