// Exercícios de Interpretação de Código

//Questão 1
// A -
// Ele pede para o usuário digitar um número, o número digitado cai em condicionais com resto de divisão 2 e 
//compara se tipo ou valor é igual a 0. Se essa comparação for verdadeira, o "if" é executado, 
//caso seja falsa, o "else" é executado. Ele quer testar se o número digitado divide por 2 até chegar em 0.

// B -
// O usuário tem que digitar um número tipo par, para imprimi no console "Passou no teste".

// C -
// O usuário tem que digitar um número tipo ímpar, para imprimi no console "Não passou no teste".


//Questão 2
// A -
// Ele simplificar as condicionais.

// B -
// O preço da fruta Maçã, é R$ 2.25.

// C -
// O preço da fruta Pêra, é R$ 5.


//Questão 3
// A -
// Pedindo para o usuário digitar um número

// B -
// Esse número passou no teste e uma mensagem de erro logo abaixo. Se colocar -10 só aparece a mensagem de erro.

// C -
// Sim. Ele não consegue ler o console.log(mensagem), pois a variavel mensagen esta
//atribuida dentro do escopo da condicional e o console.log(mensagem) esta no escopo global. Para não dar erro, 
//o console.log(mensegem) teria que está dentro do escopo da condicional, como exemplo abaixo.

// const numero = Number(prompt("Digite o primeiro número."))
// if(numero > 0) {
//   console.log("Esse número passou no teste")
// 	let mensagem = "Essa mensagem é secreta!!!"
//     console.log(mensagem)
// }



//Exercícios de Escrita de Código

//Questão 1 -

const idadeUsuario = Number (prompt('Qual sua idade?'))

if (idadeUsuario >= 18) {
    console.log("Você pode dirigir")
} else {
  console.log("Você não pode dirigir")  
}

//Questão 2 -

const periodo = prompt('Cite qual período que você estudar: M (matutino), V (vespertino) ou N (noturno).')

if (periodo === "m") {
    console.log("Bom Dia!")
} else if (periodo === "v") {
    console.log("Boa Tarde!")
} else if (periodo === "n") {
    console.log("Boa Noite!")
} else {
    console.log("Digite uma das letras citadas.")
}


//Questão 3 -

const periodo = prompt('Cite qual período que você estudar: M (matutino), V (vespertino) ou N (noturno).')

switch(periodo){
    case 'm':
        console.log("Bom Dia!")
        break
    case "v":
        console.log("Boa Tarde!")
        break
    case 'n':
        console.log("Boa Noite!")
        break
    default:
        console.log("Digite uma das letras citadas.")
}


//Questão 4 -

const genero = prompt("Qual o gênero do filme que irão assisit?") === "fantasia"
const valor = Number (prompt("Qual o valor do ingresso?")) < 15

if (genero && valor) {
     console.log("Bom filme!")
} else {
     console.log("Escolha outro filme. :(")
} 