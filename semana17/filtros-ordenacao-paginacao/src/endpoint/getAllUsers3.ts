import { Request, Response } from "express"
import selectAllUsers3 from "../data/query/selectAllUsers3"

export const getAllUsers3 = async (req: Request, res: Response): Promise<void> => {
    try {
        const page = Number(req.query.page) || 1

        const limit = 5

        const offset = 5 * (page - 1)

        const users = await selectAllUsers3(page, limit, offset)

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