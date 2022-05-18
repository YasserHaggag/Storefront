import { Router } from "express";
import validateTokenMiddleware from "../middlewares/authentication.middleware";
import orderRoutes from "./orders.routes";
import order_products_Routes from "./orders_products.routes";
import productRoutes from "./products.routes";
import userRoutes from "./user.routes";

const routes=Router();

routes.use('/user',userRoutes)
//routes.use('/products',)
routes.use('/product',productRoutes,validateTokenMiddleware)

routes.use('/order',orderRoutes)
routes.use('/order_products',order_products_Routes)




export default routes;