import { connection } from "../connection"

export default async function selectAllUsers3(limit: number, offset: number, page: number): Promise<any> {
    const result = await connection.raw(`
        SELECT id, name, email, type
        FROM Aula49_Exercicio
        LIMIT ${limit}
        OFFSET ${offset};
        `)
 
    return result[0]

}