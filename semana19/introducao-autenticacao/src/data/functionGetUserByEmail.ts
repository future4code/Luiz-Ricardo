import { connection } from "./connection"

export const functionGetUserByEmail = async (email: string): Promise<any> => {
    const result = await connection
        .select("*")
        .from('User_Aula55')
        .where({ email });
 
    return result[0]
}