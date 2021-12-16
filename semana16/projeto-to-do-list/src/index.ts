import app from "./app"
import createUser from "./endpoints/createUser"
import editUser from "./endpoints/editUser"
import getUserById from "./endpoints/getUserById"
import createTask from "./endpoints/createTask"
import getTaskById from "./endpoints/getTaskById"

app.post('/user', createUser)
app.get('/user/:id', getUserById)
app.put('/user/edit/:id', editUser)

app.post("/task", createTask)
app.get("/task/:id", getTaskById)