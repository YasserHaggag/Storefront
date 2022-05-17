import { Request, Response, NextFunction } from "express";
import { users } from "../models/users.model";
import config from '../config'
import jwt from 'jsonwebtoken'

const userModel = new users();

export const create = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = await userModel.create(req.body);
        res.json(
            {
                status: 'success',
                data: { user },
                message: 'Created Successfully'
            })

    } catch (error) {
        next(error)


    }

}

export const updateUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = await userModel.updateuser(req.body);
        res.json(
            {
                status: 'success',
                data: { user },
                message: 'Updated Successfully'
            })

    } catch (error) {
        next(error)


    }

}
export const allusers = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const getall = await userModel.getall();
        res.json(
            {
                status: 'success',
                data: { getall }
            })
          

    } catch (error) {
        next(error)

    }
    next();
    

}

export const getuser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const getone = await userModel.getone(req.params.id as unknown as string);
        res.json(
            {
                status: 'success',  
                data: getone,
            })

    } catch (error) {
        throw new Error("");
        

    }
    next()

}

export const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const deleteone = await userModel.deleteone(req.params.id as unknown as string)
        res.json(
            {
                status: 'success',  
                data: deleteone,
            })

    } catch (error) {
        throw new Error("");
        

    }
    next()

}

export const authenticate =async(req:Request,res:Response,next:NextFunction)=>
{
    try {
        const {email,password}=req.body;
        console.log(req.body)
        const user=await userModel.authentication(email,password);
        console.log(user)
        const token=jwt.sign({user},config.tokensecret as unknown as string);
        
        if (!user)
        {
            return res.status(401).json({
                status:'error',
                message:'Please check the User name and password and Try again'
            })
        }
        return res.json({
            status:'success',
            data:{user,token},
            message:'user has been authenticated'
        })
        
    } catch (error) {
        return next(error)
        
        
    }
}


export default {allusers,create,getuser,deleteUser,authenticate}
