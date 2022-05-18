import { NextFunction, Request,Response } from "express"

import { STATUS_CODES } from "http"
import jwt from 'jsonwebtoken'
import config from '../config'
import { authenticate } from "../controllers/user.controllers"
import errormid from "./error.middleware"
const unAuthorized = (next : NextFunction) => {
    const error = new Error('Login Error, please enter Correct Authentication to proceed');
    next(error);
}



const validateTokenMiddleware = async (req: Request, res: Response, next: NextFunction) => {


    try {   
        // get authorization header
        const authHeader : string | undefined = req.get('Authorization');
       
        // check if there is authorization header or not
        if (authHeader) {
            const token = authHeader.split(' ')[1];

            if (token) {
                const decodeToken = jwt.verify(token, config.tokensecret as string);
                

                if (decodeToken) next();

                // failed to authorize 
                else unAuthorized(next);
            } else {

                // no token provided
                unAuthorized(next);
            }
        } else {
            // no authorization header
            unAuthorized(next);
        }

    } catch (error) {
        unAuthorized(next);
    }

}
export default validateTokenMiddleware