import { connection } from "../../data/connection"
import { Request, Response } from "express"
import { User, Product, Purchase } from "../../types"

export const registerPurchases = async (req: Request, res: Response): Promise<void> => {
    try {
        const { user_id, product_id, quantity } = req.body

        if (!user_id || !product_id || !quantity) {
            throw new Error("Preencher todos os parâmetros.")
        }

        const [user]: User[] = await connection("LabECommerce_Users")
            .select()
            .where({ id: user_id })

        if (!user) {
            throw new Error("Usuário não encontrado.(user_id)")
        }

        const [product]: Product[] = await connection("LabECommerce_Products")
            .select()
            .where({ id: product_id })

        if (!product) {
            throw new Error("Produto não encontrado.(product_id)")
        }

        const total_price = product.price * quantity

        const purchase: Purchase = {
            id: Date.now().toString(),
            user_id,
            product_id,
            quantity,
            total_price
        }

        await connection("LabECommerce_Purchases").insert(purchase)

        res.status(201).send({ message: "Compra realizada com sucesso!" })

    } catch (error: any) {
        res.status(400).send({ message: error.message })
    }
}