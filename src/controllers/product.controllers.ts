import { Request, Response, NextFunction } from "express";
import { products } from "../models/products.model";

const productModel = new products();

export const create = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const product = await productModel.create(req.body);
        res.json(
            {
                status: 'success',
                data: { product },
                message: 'Created Successfully'
            })

    } catch (error) {
        next(error)


    }

}

export const updateProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const Product = await productModel.updateproduct(req.body);
        res.json(
            {
                status: 'success',
                data: {Product},
                message:`Product with ID: ${req.body.id} is Updated Successfully`
            })

    } catch (error) {
        next(error)


    }

}
export const allProducts = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const getall = await productModel.getall();
        res.json(
            {
                status: 'success',
                data: { getall }
            })

    } catch (error) {
        next(error)

    }

}

export const getProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const getone = await productModel.getone(req.params.id as unknown as string);
        res.json(
            {
                status: 'success',  
                data: getone,
            })

    } catch (error) {
        next(error)

    }

}

export const deleteProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const deleteone = await productModel.deleteone(req.params.id as unknown as string)
        res.json(
            {
                status: 'success',  
                data: deleteone,
                message:`Product with ID: ${req.params.id} is Deleted Successfully`
            })

    } catch (error) {
        next(error)

    }

}


export default {allProducts,create,getProduct,deleteProduct,updateProduct}
