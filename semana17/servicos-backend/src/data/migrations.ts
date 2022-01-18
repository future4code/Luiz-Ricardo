import { connection } from "./connection"
import { getAddressInfo } from "../services/getAddressInfo"

const printError = (error: any) => { console.log(error.sqlMessage || error.message) }

const createTable = () => connection.raw(`      
    CREATE TABLE IF NOT EXISTS Aula51_Address (
        cep VARCHAR(255) PRIMARY KEY NOT NULL,
        logradouro VARCHAR(255) NOT NULL,
        numero INT NOT NULL,
        complemento VARCHAR(255),
        bairro VARCHAR(255) NOT NULL,
        cidade VARCHAR(255) NOT NULL,
        estado VARCHAR(255) NOT NULL
    );
`)
.then(() => { console.log("Tabela Criada!") })
.catch(printError)

const insertAddress = async () => {
    const newAddress = await getAddressInfo("05001200", 1705, "Casa do Palmeiras")
    await connection("Aula51_Address")
    .insert(newAddress)
    .then(() => { console.log("Endereço Criado!") })
    .catch(printError)
}

const closeConnection = () => { connection.destroy() }

createTable()
    .then(insertAddress)
    .finally(closeConnection)