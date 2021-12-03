import express, { Request, Response } from 'express'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors())

type User = {
  id: number,
  name: string,
  email: string,
  type: string,
  age: number
}

enum UserType {
  ADMIN = "ADMIN",
  NORMAL = "NORMAL"
}

// Mock simulando um array de usuários no Banco de Dados
let users: User[] = [
  {
    id: 1,
    name: "Alice",
    email: "alice@email.com",
    type: UserType.ADMIN,
    age: 12
  },
  {
    id: 2,
    name: "Bob",
    email: "bob@email.com",
    type: UserType.NORMAL,
    age: 36
  },
  {
    id: 3,
    name: "Coragem",
    email: "coragem@email.com",
    type: UserType.NORMAL,
    age: 21
  },
  {
    id: 4,
    name: "Dory",
    email: "dory@email.com",
    type: UserType.NORMAL,
    age: 17
  },
  {
    id: 5,
    name: "Elsa",
    email: "elsa@email.com",
    type: UserType.ADMIN,
    age: 17
  },
  {
    id: 6,
    name: "Fred",
    email: "fred@email.com",
    type: UserType.ADMIN,
    age: 60
  }
]

// Exercício 1

// A - O GET.
// B - /users.

app.get("/users", (req: Request, res: Response) => {

  let errorCode: number = 400
  
  try {
    res.status(200).send(users)
    
  } catch (error: any) {
    res.status(errorCode).send({message: error.message})
  }
})

// Exercício 3

// A - QueryParams.
// B - Feito no endpoint.

app.get("/users/search", (req: Request, res: Response) => {

  let errorCode: number = 400

  try {
    const name: string = req.query.name as string
    const user: User | undefined = users.find((user) => user.name === name)

    if (!user) {
      errorCode = 404
      throw new Error("User not found.")
    }
    res.status(200).send(user)

  } catch (error: any) {
    res.status(errorCode).send({message: error.message})
  }
})

// Exercício 2

// A - Pelo PathParams, pq quando se trata de uma propriedade/usuário específico é pelo PathParams que passamos.
// B - Sim, usando uma condição para validar os tipos.

app.get("/users/:type", (req: Request, res: Response) => {

  let errorCode: number = 400

  try {
    const type: string = req.params.type.toUpperCase() as string

    if (!(type in UserType)) {
      errorCode = 422
      throw new Error("Invalid Parameters.");
    }

    const user = users.filter((user) => user.type === type)

    if (!user) {
      errorCode = 404
      throw new Error("Type not found.")
    }
    res.status(200).send(user)

  } catch (error: any) {
    res.status(errorCode).send({message: error.message})
  }
})

// Exercício 4

// A - Não mudou nada, o que aconteceu é que adicionei mais um usuário com a mesmas informações do usuário que adicionei usando o método post.
// B - Não, pq o PUT é para alterar alguma informação e caso não especifique essa informação, ele adicionará um novo usuário com as mesmas informações já existente.

app.post("/users", (req: Request, res: Response) => {

  let errorCode: number = 400

  try {
    const {id, name, email, type, age} = req.body

    if(!id || !name || !email || !type || !age) {
      errorCode = 422
      throw new Error("Please check the fields!")
    }

    const newUser: User = {
      id,
      name, 
      email,
      type,
      age
    }

    users.push(newUser)

    res.status(201).send({message: "User created successefully."})

  } catch (error: any) {
    res.status(errorCode).send({message: error.message})
  } 
})

// Para testar se o servidor está tratando os endpoints corretamente
app.get("/ping", (req: Request, res: Response) => {
  res.status(200).send("pong!")
})

app.listen(3003, () => {
  console.log('Server is running at port 3003')
})