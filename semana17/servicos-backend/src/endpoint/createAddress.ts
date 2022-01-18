import { connection } from "../data/connection"
import { Request, Response } from "express"
import { getAddressInfo } from "../services/getAddressInfo"
import { Address } from "../types"

export default async function createAddress(
    req: Request,
    res: Response
): Promise<void> {
    try {
        const { cep, numero, complemento } = req.body
        
        if ( !cep || !numero ) {
            res.statusCode = 422
            throw "'cep', 'logradouro', 'numero', 'bairro', 'cidade' e 'estado' são obrigatórios"
        }

        const newAddress: Address = await getAddressInfo(cep, numero, complemento)

        await connection('Aula51_Address').insert(newAddress)

        res.status(201).send("Endereço criado!")

    } catch (error: any) {

        if (typeof error === "string") {
            res.send(error)
        } else {
            console.log(error.sqlMessage || error.message)
            res.status(500).send("Ops! Um erro inesperado ocorreu =(")
        }
    }
}