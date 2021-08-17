// Exercícios de Interpretação de Código

//Questão 1

//A - 10 e 50
//B - 



// Exercícios de Escrita de Código

//Questão 1 

//A

function informações() {
    console.log("Eu sou Luiz, tenho 34 anos, moro em São Paulo e sou estudante.")
}

informações()

//B

function informações1(nome, idade, cidade, profissão){
    const infoPessoais = `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissão}`
    return infoPessoais
}

console.log(informações1('Maria', 30, 'São Paulo', 'médica'))

//Questão 2

//A

function somaNumeros(numero1, numero2){
    const soma = numero1 + numero2
    return soma
}

console.log(somaNumeros(2, 4))

//B

function infoNumeros(numero1, numero2){
    const informar = numero1 >= numero2
    return informar
}

console.log(infoNumeros(10, 5))

//C

function darNumero(numero){
    const numeroPar = numero % 2 === 0
    return numeroPar
}

console.log(darNumero(15))

//D

function escreverMensagem(mensagem){
    const nova = mensagem
    console.log(nova.length)
    console.log(nova.toUpperCase())
}

escreverMensagem('Eu amo minhas filhas!!!')

//Questão 3

const num1 = Number(prompt('Insira um número'))
const num2 = Number(prompt('Insira outro número'))

console.log(num1, num2)

let somaNumber = (num1,num2) => {
    const adição = num1 + num2
    return adição
}

console.log('Soma:', somaNumber(num1,num2))

let subtraiNumber = (num1,num2) => {
    const subtração = num1 - num2
    return subtração
}

console.log('Diferença:', subtraiNumber(num1,num2))

let multiplicarNumber = (num1,num2) => {
    const multiplicação = num1 * num2
    return multiplicação
}

console.log('Multiplicação:', multiplicarNumber(num1,num2))

let dividiNumber = (num1,num2) => {
    const divisão = num1 / num2
    return divisão
}

console.log('Divisão:', dividiNumber(num1,num2))