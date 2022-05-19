/* Replace with your SQL commands */
CREATE TABLE users (
    id Serial PRIMARY  KEY Not Null,
    fullname VARCHAR(150),
    telephone VARCHAR(50),
    u_address text,
    email VARCHAR(50) UNIQUE,
    password VARCHAR(255) Not Null
);
