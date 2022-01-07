import { connection } from "../../data/connection"
import { Request, Response } from "express"
import { User } from "../../types"

export const getUserPurchases = async (req: Request, res: Response): Promise<void> => {
    try {
        const { user_id } = req.params

        const result: User[] = await connection("LabECommerce_Users").where({ id: user_id })

        const user = result[0]

        if (!user) {
            throw new Error("Usuário não encontrado.(user_id)")
        }

        const data = await connection("LabECommerce_Purchases")
            .select(
                "LabECommerce_Purchases.id as purchase_id",
                "LabECommerce_Purchases.product_id",
                "LabECommerce_Products.name as product_name",
                "LabECommerce_Products.image_url",
                "LabECommerce_Products.price as product_price",
                "LabECommerce_Purchases.quantity",
                "LabECommerce_Purchases.total_price"
            ).innerJoin(
                "LabECommerce_Users",
                "LabECommerce_Users.id",
                "LabECommerce_Purchases.user_id"
            ).innerJoin(
                "LabECommerce_Products",
                "LabECommerce_Products.id",
                "LabECommerce_Purchases.product_id"
            ).where({ user_id })

        res.status(200).send({ purchases: data })

    } catch (error:any) {
        res.status(400).send({ message: error.message })
    }
}