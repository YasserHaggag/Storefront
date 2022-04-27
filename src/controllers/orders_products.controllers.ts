import { Request, Response, NextFunction } from "express";
import { orders_products } from "../models/orders_products.model";



const orders_productsModel = new orders_products();

export const create = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const order_products = await orders_productsModel.create(req.body);
        res.json(
            {
                status: 'success',
                data: { order_products },
                message: 'Created Successfully'
            })

    } catch (error) {
        next(error)


    }

}

export const updateRecord = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const order_products = await orders_productsModel.updateRecord(req.body);
        res.json(
            {
                status: 'success',
                data: {order_products},
                message:`Record with ID: ${req.body.id} is Updated Successfully`
            })

    } catch (error) {
        next(error)


    }

}
export const allOrders_products = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const getall = await orders_productsModel.getall();
        res.json(
            {
                status: 'success',
                data: { getall }
            })

    } catch (error) {
        next(error)

    }

}

export const getOrder_products = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const getone = await orders_productsModel.getone(req.params.id as unknown as string);
        res.json(
            {
                status: 'success',  
                data: getone,
            })

    } catch (error) {
        next(error)

    }

}

export const deleteOrder_products = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const deleteone = await orders_productsModel.deleteone(req.params.id as unknown as string)
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


export default {allOrders_products,create,getOrder_products,deleteOrder_products,updateRecord}
