"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var orders_products_controllers_1 = require("../controllers/orders_products.controllers");
var order_products_Routes = (0, express_1.Router)();
order_products_Routes.get('/', orders_products_controllers_1.allOrders_products);
order_products_Routes.get('/:id', orders_products_controllers_1.getOrder_products);
order_products_Routes.post('/', orders_products_controllers_1.create);
order_products_Routes.delete('/:id', orders_products_controllers_1.deleteOrder_products);
order_products_Routes.put('/', orders_products_controllers_1.updateRecord);
/* userRoutes.post('/', (req: Request, res: Response) => {
    const article: users = {
      name: req.body.name,
      content: req.body.content
    }
    try {
       res.send('this is the CREATE route')
    } catch (err) {
       res.status(400)
       res.json(err)
    }
}) */
/* userRoutes.put('/users/:id', (req: Request, res: Response) => {
 const article: Article = {
      id: req.params.id,
      title: req.body.title,
      content: req.body.content
    }
    try {
       res.send('this is the EDIT route')
    } catch (err) {
       res.status(400)
       res.json(err)
    }
}) */
/* userRoutes.delete('/articles/:id', (_req: Request, res: Response) => {
    try {
       res.send('this is the DELETE route')
    } catch (err) {
       res.status(400)
       res.json(err)
    }
}

) */
exports.default = order_products_Routes;
