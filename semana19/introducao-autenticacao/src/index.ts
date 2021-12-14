import app from "./app"
import createUser from './endpoints/createUser'
import login from "./endpoints/login"
import loggedInUser from "./endpoints/loggedInUser"

app.post('/user/signup', createUser)
app.post('/user/login', login)
app.get('/user/profile', loggedInUser)