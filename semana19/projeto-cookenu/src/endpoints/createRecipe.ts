import { Request, Response } from "express"
import { Recipe } from "../entities/Recipe"
import { RecipeDatabase } from "../data/RecipeDatabase"
import { Authenticator } from "../services/Authenticator"
import { IdGenerator } from "../services/IdGenerator"

export async function createRecipe(req: Request, res: Response): Promise<void> {
    try {
        const token = req.headers.authorization
        const { title, description } = req.body

        if (!token) {
            res.statusCode = 422
            throw new Error("É necessária uma autorização a ser passada nos headers.")
        }

        if (!title || !description) {
            res.statusCode = 422
            throw new Error("Os campos 'title' e 'description' são obrigatórios.")
        }

        const id: string = new IdGenerator().id()
        const createDate = new Date(Date.now())


        const tokenData = new Authenticator().getTokenData(token)

        if (!tokenData) {
            res.statusCode = 401
            throw new Error("token inválido.")
        }

        const newRecipe = new Recipe(
            id,
            title,
            description,
            createDate,
            tokenData.id
        )

        await new RecipeDatabase().createRecipe(newRecipe)


        res.status(201).send({ message: 'Receita criada com sucesso.' })

    } catch (error: any) {
        if (res.statusCode === 200) {
            res.status(500).send({ message: "Internal server error" })
        } else {
            res.send({ message: error.sqlMessage || error.message })
        }
    }
}