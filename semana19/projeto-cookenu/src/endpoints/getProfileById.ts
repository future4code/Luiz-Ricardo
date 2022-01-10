import { Request, Response } from "express"
import { UserDatabase } from "../data/UserDatabase"
import { Authenticator } from "../services/Authenticator"

export async function getProfileById(req: Request, res: Response): Promise<void> {
    try {
        const token = req.headers.authorization
        const id = req.params.id

        if (!token || !id) {
            res.statusCode = 422
            throw new Error("É necessário um id e uma autorização a ser passada nos headers.")
        }

        const tokenData = new Authenticator().getTokenData(token)

        if (!tokenData) {
            res.statusCode = 401
            throw new Error("token inválido.")
        }

        const userDataBase = await new UserDatabase().getProfile(id)

        if (!userDataBase) {
            res.statusCode = 404
            throw new Error("Id de usuário não econtrado.")    
        }

        res.status(200).send(userDataBase)

    } catch (error:any) {
        if (res.statusCode === 200) {
            res.status(500).send({ message: "Internal server error" })
        } else {
            res.send({ message: error.sqlMessage || error.message })
        }
    }
}