import { Request, Response } from "express"
import { functionGetUserById } from "../data/functionGetUserById"
import { Authenticator } from "../services/Authenticator"

export default async function loggedInUser (req: Request, res: Response): Promise<void> {
   try {

      const token = req.headers.authorization as string

      const authenticationData = new Authenticator().getTokenData(token)

      const user = await functionGetUserById(authenticationData.id);

      res.status(200).send({ id: user.id, email: user.email })

   } catch (error) {
      res.status(400).send({ message: error.message })
   }
}