"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var product_controllers_1 = require("../controllers/product.controllers");
var productRoutes = (0, express_1.Router)();
productRoutes.get('/', product_controllers_1.allProducts);
productRoutes.get('/:id', product_controllers_1.getProduct);
productRoutes.post('/', product_controllers_1.create);
productRoutes.delete('/:id', product_controllers_1.deleteProduct);
productRoutes.put('/', product_controllers_1.updateProduct);
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
exports.default = productRoutes;
