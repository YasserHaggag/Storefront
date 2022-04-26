import { Router } from "express";
import productRoutes from "./products.routes";
import userRoutes from "./user.routes";

const routes=Router();

routes.use('/user',userRoutes)
//routes.use('/products',)
routes.use('/product',productRoutes)




export default routes;