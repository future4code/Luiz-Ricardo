//Exercício A:
//Podemos acessar os parametros passados na linha de comando pelo process.argv.

//Exercício B:
// const nome = process.argv[2]
// const idade = Number(process.argv[3])

// console.log(`Olá, ${nome}! Você tem ${idade} anos.`)

//Exercício C:
const nome = process.argv[2]
const idade = Number(process.argv[3])
const idadeMaisSete = idade + 7 

console.log(`Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${idadeMaisSete}.`)