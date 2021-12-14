import { Request, Response } from "express"
import { connection } from "../data/connection"
import { Authenticator } from "../services/Authenticator"
import { generateId } from "../services/generateId"

export default async function createUser (req: Request, res: Response): Promise<void> {
   try {

      // Item b. Validação do email
      if (!req.body.email || req.body.email.indexOf("@") === -1) {
         throw new Error("Invalid email")
      }

      // Item c. Validação da senha
      if (!req.body.password || req.body.password.length < 6) {
         throw new Error("Invalid password")
      }

      const userData = {
         id: generateId(),
         email: req.body.email,
         password: req.body.password
      }
   
      await connection('User_Aula55').insert(userData)
   
      const token = new Authenticator().generateToken({ id: userData.id })

      res.status(200).send({"token": token })

   } catch (error) {
      res.status(400).send({ message: error.message })
   }
}