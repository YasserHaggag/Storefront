
import { Router } from "express";
import {allOrders_products,create,getOrder_products,deleteOrder_products,updateRecord } from "../controllers/orders_products.controllers";




const order_products_Routes=Router();

order_products_Routes.get('/', allOrders_products)
order_products_Routes.get('/:id',getOrder_products )
order_products_Routes.post('/', create)
order_products_Routes.delete('/:id',deleteOrder_products)
order_products_Routes.put('/',updateRecord)

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
export default order_products_Routes