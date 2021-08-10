//Exercícios de Interpretação de Código

//Questão 1
//a = false
//b = false
//c = true
//d = boolean

//Questão 2
// Sim, ele esqueceu de fazer um conversão para Number (). Será impresso o primeiroNumero e o segundoNumero.

//Questão 3
//Para se impresso a soma dos dois números, ele deve fazer uma conversão para Number () antes dos prompt.



//Exercícios de Escrita de Código



//Questão 1 - Faça um programa que:
//a) Pergunte a idade do usuário
//b) Pergunte a idade do seu melhor amigo ou da sua melhor amiga
//c) **Imprima na console** a seguinte mensagem: "Sua idade é maior do que a do seu melhor amigo?", seguido pela resposta (`true` ou `false`)
//d) **Imprima na console** a diferença de idade (não tem problema se sair um número negativo)


const idadeSua = Number (prompt('Qual sua idade'))
const idadeAmigo = Number (prompt('Qual a idade do seu melhor amigo ou amiga'))

console.log('Sua idade é maior do que a do seu melhor amigo ou amiga?', idadeSua > idadeAmigo)

const diferença = idadeSua - idadeAmigo

console.log('Diferença de idade é:', diferença)

//Questão 2 - Faça um programa que:
//a) Peça ao usuário que insira um número par
//b) Imprima na console o resto da divisão desse número por 2.
//c) Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.
//d) O que acontece se o usuário inserir um número ímpar? Escreva em um comentário de código

const numeroPar = Number (prompt('Digite um número par.'))

console.log(numeroPar % 2)

//c = Sim, para todos números pares digitado, o resultado imprimido no console será 2.
//d = O resultado imprimido no console será sempre 1.

//Questão 3 - Faça um programa que pergunte ao usuário sua idade em anos. Depois, imprima no console.
//a) A idade do usuário em meses
//b) A idade do usuário em dias
//c) A idade do usuário em horas

const idadeAno = Number (prompt('Quantos anos você tem?'))

const meses = 12

let idadeMeses = idadeAno * meses

const dias = 365

let idadeDias = idadeAno * dias

let idadeHoras = idadeAno * dias * 24

console.log('Idade em meses?', idadeMeses)
console.log('Idade em dias?', idadeDias)
console.log('Idade em horas?', idadeHoras)

//Questão 4 - Faça um programa que pergunte ao usuário dois números.
//Em seguida, faça as operações e imprima no console as seguintes mensagens seguidas pelo true ou false:
//a) O primeiro numero é maior que segundo?
//b) O primeiro numero é igual ao segundo?
//c) O primeiro numero é divisível pelo segundo?
//d) O segundo numero é divisível pelo primeiro?

let primeiroNumero = Number (prompt("Digite um numero!"))
let segundoNumero = Number (prompt("Digite outro numero!"))

console.log('O primeiro número é maior que o segundo?', primeiroNumero > segundoNumero)
console.log('O primeiro número é igual ao segundo?', primeiroNumero === segundoNumero)
console.log('O primeiro número é divisível pelo segundo?', (primeiroNumero % segundoNumero) === 0)
console.log('O segundo número é divisível pelo primeiro?', (primeiroNumero % segundoNumero) === 1)