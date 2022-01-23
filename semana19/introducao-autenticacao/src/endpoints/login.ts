import { Request, Response } from "express"
import { functionGetUserByEmail } from "../data/functionGetUserByEmail"
import { Authenticator } from "../services/Authenticator"

export default async function login (req: Request, res: Response): Promise<void> {
    try {
        
        // Item b. Validação do email
        if (!req.body.email || req.body.email.indexOf("@") === -1) {
            throw new Error("Invalid email");
        }

        const userData = {
            email: req.body.email,
            password: req.body.password,
        }

        const user = await functionGetUserByEmail(userData.email)

        if (user.password !== userData.password) {
            throw new Error("Invalid password")
        }

        const token = new Authenticator().generateToken({ id: user.id })

        res.status(200).send({"token": token })
        
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
}