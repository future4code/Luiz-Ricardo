import { connection } from "./connection"

connection.raw(`
   CREATE TABLE IF NOT EXISTS User_Aula55 (
	   id VARCHAR(255) PRIMARY KEY,
      email VARCHAR(255) UNIQUE NOT NULL,
      password VARCHAR(255) NOT NULL
   );   
`).then(() => {
   console.log("Tabela Criada!")
}).catch(error => {
   console.log(error.sqlMessage || error.message)
}).finally(()=>{
   connection.destroy()
})