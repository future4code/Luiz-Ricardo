//Exercícios de Interpretação de Código

//Questão 1

// a.  undefined
// b.  null
// c.  11
// d.  3
// e.  (11) [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// f.  9

//Questão 2

//"SUBI NUM ÔNIBUS EM MIRROCOS"? 30



//Exercícios de Escrita de Código

//Questão 1

const nome = prompt("Qual seu nome?")
const email = prompt("Qual seu e-mail?")

console.log(`O e-mail ${email.trim()} foi cadastrado com sucesso. Seja bem-vinda(o), ${nome}!`)

//Questão 2

const comidasPreferidas = ['Filé de Frango', 'Hambúrguer', 'Lasanha', 'Macarronada', 'Pizza']

console.log(comidasPreferidas)
console.log("Essas são as minhas comidas preferidas:")
console.log(comidasPreferidas[i=0])
console.log(comidasPreferidas[i=1])
console.log(comidasPreferidas[i=2])
console.log(comidasPreferidas[i=3])
console.log(comidasPreferidas[i=4])

const comidaUsuario = prompt("Qual sua comida preferida?")

comidasPreferidas[1] = comidaUsuario

console.log(comidasPreferidas)

//Quetão 3

let array = []
const listaDeTarefas = array

const tarefa1 = prompt("Cite uma tarefa que faz no dia?")
const tarefa2 = prompt("Cite uma segunda tarefa que faz no dia?")
const tarefa3 = prompt("Cite uma terceira tarefa que faz no dia?")

array = [tarefa1, tarefa2, tarefa3]

console.log(array)

let indice = Number(prompt("Digite de 0 a 2 (0 para primera, 1 para segunda, 2 para terceira), para qual tarefa realizou. "))

array.splice(indice, 1)

console.log(array)