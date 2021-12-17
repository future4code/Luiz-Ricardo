import { Request, Response } from "express"
import selectAllUsers4 from "../data/query/selectAllUsers4"

export const getAllUsers4 = async (req: Request, res: Response): Promise<void> => {
    try {
        const name = req.query.name as string || '%'

        const type = req.params.type as string || '%'

        const sort = req.query.sort as string === 'id' ? 'id' : req.query.sort as string === 'type' ? 'type' : 'name'

        const order = req.query.order as string === "ASC" ? 'ASC' : "DESC"

        const page = Number(req.query.page) || 1

        const limit = 5

        const offset = 5 * (page - 1)

        const users = await selectAllUsers4(name, type, sort, order, page, limit, offset)
 
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