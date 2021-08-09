//Questão 1
// 10
// 10 5

//Questão 2
// 10 10 10

//Questão 3
//horasTrabalhadas
//ganhoPorDia

//Exercícios de Escrita de Código

let nome
let idade
console.log(typeof nome)
console.log(typeof idade)

//Foi impresso underfined por falta de valor de uma variável.

nome = prompt("Qual é o seu nome?")
idade = prompt("Qual é o sua idade?")

console.log(typeof nome)
console.log(typeof idade)

//Agora foi impresso string 2 vezes.

console.log("Olá!", nome, "você tem", idade, "anos")

let perguntaUm = "Você gosta de sair?"
let perguntaDois = "Acompanhado(a)?"
let perguntaTres = "Para causar?"
let respostaUm = "Sim"
let respostaDois = "Sim"
let respostaTres = "Não"

console.log(perguntaUm + respostaUm)
console.log(perguntaDois + respostaDois)
console.log(perguntaTres + respostaTres)

let a = 10
let b = 25
c = a
a = b
b = c

console.log("O novo valor de a é", a) // O novo valor de a é 25
console.log("O novo valor de b é", b) // O novo valor de b é 10
