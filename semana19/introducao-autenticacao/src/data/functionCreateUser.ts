import { connection } from "./connection"

export const functionCreateUser = async (email: string, password: string) => {
    await connection
        .insert({
            email,
            password
        })
        .into('User_Aula55')
}