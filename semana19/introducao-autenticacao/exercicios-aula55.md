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

CREATE TABLE IF NOT EXISTS User_Aula55 (
	id VARCHAR(255) PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);

C:

export const functionCreateUser = async (id: string, email: string, password: string) => {
    await connection
        .insert({
            id,
            email,
            password
        })
        .into('User_Aula55')
};

<h3>Exercício 3<h3>

A:

Define a tipagem do JWT_KEY como string, pois é como se espera passar a palavra-chave.

B:

import * as jwt from "jsonwebtoken"

    const expiresIn = "1min"
    const generateToken(input: AuthenticationData): string {
        const token = jwt.sign(
            {id: input.id},
            process.env.JWT_KEY as string,
            {expiresIn}
        )
        return token
    }

type AuthenticationData = {
  id: string
}

<h3>Exercício 4<h3>

Resposta na pasta endpoints, arquivo createUser.ts.

<h3>Exercício 5<h3>

A:

export const functionGetUserByEmail = async (email: string): Promise<any> => {
    const result = await connection
        .select("*")
        .from('User_Aula55')
        .where({ email });
 
    return result[0]
}

<h3>Exercício 6<h3>

Resposta na pasta endpoints, arquivo login.ts.

<h3>Exercício 7<h3>

A: 

Permite que a tipagem seja qualquer tipo de variável, pois é necessário para não dar erro ao transpilar.

B:

getTokenData = (token: string) => {
    try {
        const tokenData = verify (token, process.env.JWT_SECRET) as any
        return {id: tokenData.id}
    } catch (error) {
        console.log(error)
        return null
    }
}


<h3>Exercício 8<h3>

A:

export const functionGetUserById = async (id: string): Promise<any> => {
    const result = await connection
        .select("*")
        .from('User_Aula55')
        .where({ id });
 
    return result[0]
}

B:

Resposta na pasta endpoints, arquivo loggedInUser.ts.