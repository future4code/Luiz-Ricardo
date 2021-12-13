import { connection } from "./connection"

export const userCreate = async (id: string, email: string, password: string) => {
    await connection('User_Aula55')
        .insert({
            id: id,
            email: email,
            password: password
        })
}