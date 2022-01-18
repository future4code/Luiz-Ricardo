import { connection } from "../connection"

export default async function selectAllUsers4(
    name: string, 
    type: string, 
    sort: string, 
    order: string, 
    limit: number,
    page: number, 
    offset: number
    ): Promise<any> {
    const result = await connection.raw(`
        SELECT id, name, email, type
        FROM Aula49_Exercicio
        WHERE name LIKE '%${name}%' AND type LIKE '%${type}%'
        ORDER BY ${sort} ${order}
        LIMIT ${limit}
        OFFSET ${offset};
        `)
 
    return result[0]

}