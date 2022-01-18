import { connection } from "../../data/connection"
import { Request, Response } from "express"
import { Product } from "../../types"

export const getAllProducts = async (req: Request, res: Response): Promise<void> => {
    try {
        const products: Product[] = await connection("LabECommerce_Products")

        res.send(products)

    } catch (error:any) {
        res.status(400).send({ message: error.message })
    }
}