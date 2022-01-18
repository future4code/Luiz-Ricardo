import { connection } from "./connection"

const printError = (error: any) => { console.log(error.sqlMessage || error.message) }

const createTables = () => connection.raw(`
    CREATE TABLE IF NOT EXISTS LabECommerce_Users (  
        id VARCHAR(255) PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        password VARCHAR(255) NOT NULL
    );

    CREATE TABLE IF NOT EXISTS LabECommerce_Products (  
        id VARCHAR(255) PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        price FLOAT NOT NULL,
        image_url VARCHAR(255) NOT NULL
    );

    CREATE TABLE IF NOT EXISTS LabECommerce_Purchases (  
        id VARCHAR(255) PRIMARY KEY,
        user_id VARCHAR(255) NOT NULL,
        product_id VARCHAR(255) NOT NULL,
        quantity INT NOT NULL,
        total_price FLOAT NOT NULL,
        FOREIGN KEY (user_id) REFERENCES LabECommerce_Users (id),
        FOREIGN KEY (product_id) REFERENCES LabECommerce_Products (id)
    );
`)
.then(() => { console.log("Tabelas Criadas!") })
.catch(printError)

const closeConnection = () => { connection.destroy() }

createTables()
    .finally(closeConnection)