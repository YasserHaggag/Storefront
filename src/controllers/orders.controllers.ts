import { Request, Response, NextFunction } from "express";
import { orders } from "../models/orders.model";


const ordersModel = new orders();

export const create = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const order = await ordersModel.create(req.body);
        res.json(
            {
                status: 'success',
                data: { order },
                message: 'Created Successfully'
            })

    } catch (error) {
        next(error)


    }

}

export const updateOrder = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const order = await ordersModel.updateproduct(req.body);
        res.json(
            {
                status: 'success',
                data: {order},
                message:`order with ID: ${req.body.id} is Updated Successfully`
            })

    } catch (error) {
        next(error)


    }

}
export const allOrders = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const getall = await ordersModel.getall();
        res.json(
            {
                status: 'success',
                data: { getall }
            })

    } catch (error) {
        next(error)

    }

}

export const getOrder = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const getone = await ordersModel.getone(req.params.id as unknown as string);
        res.json(
            {
                status: 'success',  
                data: getone,
            })

    } catch (error) {
        next(error)

    }

}

export const deleteOrder = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const deleteone = await ordersModel.deleteone(req.params.id as unknown as string)
        res.json(
            {
                status: 'success',  
                data: deleteone,
                message:`Order with ID: ${req.params.id} is Deleted Successfully`
            })

    } catch (error) {
        next(error)

    }

}


export default {allOrders,create,getOrder,deleteOrder,updateOrder}
