import { NextFunction, Request } from "express"
import jwt from 'jsonwebtoken'
import config from '../config'
import { authenticate } from "../controllers/user.controllers"
import errormid from "./error.middleware"



const validateTokenMiddleware = async (req: Request, _res: Response, next: NextFunction) => {
    try {
        //get auth header
        const authHeader = req.get('Authorization')
        console.log(authHeader)

        if (authHeader) {
            const bearer = authHeader.split('')[0].toLowerCase();
            const token = authHeader.split('')[1];
            if (token && bearer === 'bearer') {
                const decode = jwt.verify(token, config.tokensecret as unknown as string)
                if (decode) {
                    next();
                } else {
                    throw new Error("You are not authorized");

                }

            }

        }



    } catch (error) {



        errormid

    }


}
export default validateTokenMiddleware