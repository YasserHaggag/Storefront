import { Request, Response, NextFunction } from "express";
import { users } from "../models/users.model";

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
        next(error)

    }

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
        next(error)

    }

}


export default {allusers,create,getuser,deleteUser}
