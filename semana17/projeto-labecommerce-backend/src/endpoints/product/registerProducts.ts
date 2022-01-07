import { connection } from "../../data/connection"
import { Request, Response } from "express"
import { Product } from "../../types"

export const registerProducts = async (req: Request, res: Response): Promise<void> => {
    try {   
        const { name, price, image_url } = req.body

        if (!name || !price || !image_url) {
            throw new Error("Preencher todos os parâmetros.")
        }

        const product: Product = {
            id: Date.now().toString(),
            name, 
            price,
            image_url
        }

        await connection("LabECommerce_Products").insert(product)

        res.status(201).send({ message: "Produto cadastrado com sucesso!" })

    } catch (error:any) {
        res.status(400).send({ message: error.message })
    }
}