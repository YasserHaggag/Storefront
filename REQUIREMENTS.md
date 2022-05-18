# API Requirements

The company stakeholders want to create an online storefront to showcase their great product ideas. Users need to be able to browse an index of all products, see the specifics of a single product, and add products to an order that they can view in a cart page. You have been tasked with building the API that will support this application, and your coworker is building the frontend.

These are the notes from a meeting with the frontend developer that describe what endpoints the API needs to supply, as well as data shapes the frontend and backend have agreed meet the requirements of the application.

## API Endpoints

#### Products

- Index: '/product' [GET] 
- Show: '/product/:id' [GET]
- Create: '/product' [POST] 
- Update: '/product' [PUT]
- Delete: '/product/:id' [DELETE]


#### Users

- Index: '/user' [GET] 
- Show: '/user/:id' [GET]
- Create: '/user' [POST] 
- Update: '/user' [PUT]
- Delete: '/user/:id' [DELETE]
- Authenticate: '/user/authenticate' [POST]

#### Orders

- Index: '/order' [GET] 
- Show: '/order/:id' [GET]
- Create: '/order' [POST] 
- Update: '/order' [PUT]
- Delete: '/order/:id' [DELETE]


## Data Shapes

#### Products

- id
- pname
- price
- pdescription

#### Users

- id
- name
- telephone
- address
- email
- payment_method
- password

#### Orders

- id
- userid
- comments
#### Orders_products

- id
- product_id
- order_id
- quantity

## Database Structure

#### Product

- id: SERIAL PRIMARY KEY
- name: VARCHAR
- price: VARCHAR
- category: VARCHAR

#### User

- id: SERIAL PRIMARY KEY
- name: VARCHAR
- telephone: VARCHAR
- address: VARCHAR
- email: VARCHAR
- payment_method: Int
- password: VARCHAR

#### Orders

- id: SERIAL PRIMARY KEY
- user_id: string [Foreign key to users table]
- status: ENUM(active or complete)

### Orders_products

- id: SERIAL PRIMARY KEY
- order_id: string [Foreign key to orders table]
- product_id: string [Foreign key to products table]
- quantity: integer