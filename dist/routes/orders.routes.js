"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var orders_controllers_1 = require("../controllers/orders.controllers");
var authentication_middleware_1 = __importDefault(require("../middlewares/authentication.middleware"));
var orderRoutes = (0, express_1.Router)();
orderRoutes.get('/', authentication_middleware_1.default, orders_controllers_1.allOrders);
orderRoutes.get('/:id', authentication_middleware_1.default, orders_controllers_1.getOrder);
orderRoutes.post('/', authentication_middleware_1.default, orders_controllers_1.create);
orderRoutes.delete('/:id', authentication_middleware_1.default, orders_controllers_1.deleteOrder);
orderRoutes.put('/', authentication_middleware_1.default, orders_controllers_1.updateOrder);
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
exports.default = orderRoutes;
