import { Request, Response } from "express"
import selectAllUsers2 from "../data/query/selectAllUsers2"

export const getAllUsers2 = async (req: Request, res: Response): Promise<void> => {
    try {
        const sort = req.query.sort as string === 'name' ? 'name' : req.query.sort as string === 'type' ? 'type' : 'email'

        const order = req.query.order as string === "DESC" ? 'DESC' : "ASC"
        
        const users = await selectAllUsers2(sort, order)

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