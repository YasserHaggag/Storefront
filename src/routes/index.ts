import { Router } from "express";
import userRoutes from "./user.routes";

const routes=Router();

routes.use('/user',userRoutes)
//routes.use('/products',)




export default routes;