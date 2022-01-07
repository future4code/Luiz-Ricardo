import { connection } from "../../data/connection"
import { Request, Response } from "express"
import { User } from "../../types"

export const getAllUsers = async (req: Request, res: Response): Promise<void> => {
    try {
        const users: User[] = await connection("LabECommerce_Users")

        res.send(users)

    } catch (error:any) {
        res.status(400).send({ message: error.message })
    }
}