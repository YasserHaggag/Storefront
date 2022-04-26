/* Replace with your SQL commands */


CREATE TABLE users (
    id Serial PRIMARY  KEY Not Null,
    fullname VARCHAR(150),
    telephone VARCHAR(50),
    u_address text,
    email VARCHAR(50) UNIQUE,
    payment_method_id int REFERENCES payment_methods(id) Not Null,
    password VARCHAR(255) Not Null
);

