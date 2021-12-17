import { connection } from "../connection"

export default async function selectAllUsers2(sort: string, order: string): Promise<any> {
    const result = await connection.raw(`
        SELECT id, name, email, type
        FROM Aula49_Exercicio
        ORDER BY ${sort} ${order};
        `)
 
    return result[0]

}