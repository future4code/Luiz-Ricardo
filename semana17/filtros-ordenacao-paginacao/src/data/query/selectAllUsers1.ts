import { connection } from "../connection"

export default async function selectAllUsers1(name: string, type: string): Promise<any> {
    const result = await connection.raw(`
        SELECT id, name, email, type
        FROM Aula49_Exercicio
        WHERE name LIKE '%${name}%' AND type LIKE '%${type}%';
        `)
 
    return result[0]

}