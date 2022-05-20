
import { Router } from "express";
import { allProducts,getProduct,create,deleteProduct,updateProduct } from "../controllers/product.controllers";
import { authenticate } from "../controllers/user.controllers";
import validateTokenMiddleware from "../middlewares/authentication.middleware";

const productRoutes=Router();

productRoutes.get('/',validateTokenMiddleware, allProducts)
productRoutes.get('/:id',validateTokenMiddleware, getProduct)
productRoutes.post('/',validateTokenMiddleware, create)
productRoutes.delete('/:id',validateTokenMiddleware,deleteProduct)
productRoutes.put('/',validateTokenMiddleware,updateProduct)

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
export default productRoutes