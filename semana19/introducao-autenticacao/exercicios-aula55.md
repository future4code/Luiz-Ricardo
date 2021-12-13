<h3>Exercício 1<h3>

A:

Sim, eu acho melhor usar strings, pois a possibilidade de combinações é enorme e diminui as chance de algum id ser repetido.

B:

import { v4 } from "uuid"

export function generateId(): string {
    return v4()
}

<h3>Exercício 2<h3>

A:

O primeiro código cria um nome para a tabela, depois a conexão com o banco de dados e a função createUser recebe como parâmetros (id, email e password) e cria um novo usuário.

B:

CREATE TABLE NOT EXISTS User_Aula55 (
	id VARCHAR(255) PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);

C:

export const userCreate = async (id: string, email: string, password: string) => {
    await connection('User_Aula55')
        .insert({
            id: id,
            email: email,
            password: password
        })
}

<h3>Exercício 3<h3>

