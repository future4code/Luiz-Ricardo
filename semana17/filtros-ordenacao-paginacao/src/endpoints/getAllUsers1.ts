import { Request, Response } from "express"
import selectAllUsers1 from "../data/query/selectAllUsers1"

export const getAllUsers1 = async (req: Request, res: Response): Promise<void> => {
    try {
        const name = req.query.name as string || '%'

        const type = req.params.type as string || '%'

        const users = await selectAllUsers1(name, type)

        if (!users.length) {
            res.statusCode = 404
            throw new Error("No users found")
        }
 
        res.status(200).send(users)
        
    } catch (error: any) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
        
    }
}