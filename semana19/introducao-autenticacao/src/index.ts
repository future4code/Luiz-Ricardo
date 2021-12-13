import app from "./app"
import editUser from './endpoints/editUser'
import createUser from './endpoints/createUser'
import { generateId } from "./services/generateId"

app.post('/users/signup', createUser)
app.put('/users/:id', editUser)

const id = generateId()

console.log("olha eu ai", id)