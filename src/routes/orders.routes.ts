
import { Router } from "express";
import { allOrders, getOrder,create, deleteOrder,updateOrder} from "../controllers/orders.controllers";
import { authenticate } from "../controllers/user.controllers";



const orderRoutes=Router();

orderRoutes.get('/', allOrders)
orderRoutes.get('/:id', getOrder)
orderRoutes.post('/', create)
orderRoutes.delete('/:id',deleteOrder)
orderRoutes.put('/',updateOrder)

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
export default orderRoutes