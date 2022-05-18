# Storefront Project

## Used Technology

the application structured by the following libraries:

- Postgres for the database
- Node/Express for the application logic
- dotenv from npm for managing environment variables
- db-migrate for migrations
- jsonwebtoken for working with JWTs
- jasmine for unit test

## Setup and Configrations

#### Prepare ENV

1. port:P_port,
    host:P_host,
    user:P_Username,
    database:P_Database,
    password:P_password,
    pepper:BCRYPT_PASSWORD,
    salt:SALT_ROUNDS,
    tokensecret:TOKEN_SECRET,
    testDB: Test_Database,
    testuser: Test_username,
    ENV: ENV

#### scripts

- npm run test : Testing Script
- npm run watch : start project with nodemon
- DataBase Port :5432
- Express Port : 3000
- Project root : [local host link](http://localhost:3000/api)

## Project branches

### 1. DB Creation and Migrations

#### Database Setup

- psql -U postgres ( all privileges granted)
- CREATE DATABASE storefront
- CREATE DATABASE storefront_test --> testing dataBase
- db-migrate up --> to run migrations
- Env Variables allocated at database.json file



### 2. postman Collection via json link

https://www.getpostman.com/collections/52a1180a4e13acdccdd5
