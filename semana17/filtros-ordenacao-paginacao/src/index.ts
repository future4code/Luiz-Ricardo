import { app } from "./app"
import { getAllUsers1 } from "./endpoint/getAllUsers1"
import { getAllUsers2 } from "./endpoint/getAllUsers2"
import { getAllUsers3 } from "./endpoint/getAllUsers3"
import { getAllUsers4 } from "./endpoint/getAllUsers4"

// app.get('/users', getAllUsers)
// app.get('/users/:type', getAllUsers)

// Exercício 1
// app.get('/users', getAllUsers1)
// app.get('/users/:type', getAllUsers1)

// Exercício 2
//app.get('/users', getAllUsers2)

// Exercício 3
//app.get('/users', getAllUsers3)

// Exercício 4
app.get('/users', getAllUsers4)
app.get('/users/:type', getAllUsers4)
