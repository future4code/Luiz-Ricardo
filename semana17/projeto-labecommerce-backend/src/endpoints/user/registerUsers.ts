import { connection } from "../../data/connection"
import { Request, Response } from "express"
import { User } from "../../types"

export const registerUsers = async (req: Request, res: Response): Promise<void> => {
    try {   
        const { name, email, password } = req.body

        if (!name || !email || !password) {
            throw new Error("Preencher todos os parâmetros.")
        }

        const user: User = {
            id: Date.now().toString(),
            name,
            email,
            password
        }

        await connection("LabECommerce_Users").insert(user)

        res.status(201).send({ message: "Usuário cadastrado com sucesso!" })

    } catch (error:any) {
        res.status(400).send({ message: error.message })
    }
}