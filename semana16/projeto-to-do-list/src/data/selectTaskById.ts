import connection from "./connection"

export default async function selectTaskById (id: string) {
    const result = await connection.raw(`
        SELECT tasks.*, nickname FROM ToDoListTask AS tasks
        JOIN ToDoListUser AS users
        ON creator_user_id = users.id
        WHERE tasks.id = '${id}';
    `)
        return result[0][0]
}