// Exercícios de Interpretação de Código

//Questão 1
// A - "Matheus Nachtergaele"
//     "Virginia Cavendish"
//     canal: "Globo", horario: "14h"

//Questão 2
// A - nome: "Juca", idade: 3, raca: "SRD"
//	   nome: "Juba", idade: 3, raca: "SRD"
//	   nome: "Jubo", idade: 3, raca: "SRD"

// B - Realizar uma cópia inteira das propriedades que estão no objeto, 
//essa sintaxe é chamada "espalhamento ou spread".


//Questão 3
// A - false
//     undefined

// B - 



// Exercícios de Escrita de Código

//Questão 1
// A - 
const pessoa1 = {
    nome: "Luiza", 
    apelidos: ["Lulis", "Iza", "Lu"]
 }

function minhaFuncao(objeto){
    console.log(`Eu sou ${objeto.nome}, mas pode me chamar de: ${objeto.apelidos[0]}, 
    ${objeto.apelidos[1]} ou ${objeto.apelidos[2]}.`)
}

minhaFuncao(pessoa1)

// B - 
const pessoa2 = {
    ...pessoa,
    apelidos: ["Brava", "Bravinha", "Bravona"]
}

minhaFuncao(pessoa2)


//Questão 2
// A -
const segurado1 = {
    nome: 'Bruno',
    idade: 25,
    profissão: 'Médico'
}

const segurado2 = {
    nome: 'Renato',
    idade: 30,
    profissão: 'Professor'
}

// B -
const minhaFuncao = (segurado1,segurado2) => { return [segurado1.nome, segurado1.nome.length, 
    segurado1.idade, segurado1.profissão, segurado1.profissão.length]
}

console.log(minhaFuncao(segurado1,segurado2))

   
//Questão 3
// A -
const carrinho = []

// B -
const fruta1 = {
    nome: 'banana',
    disponivel: true
}

const fruta2 = {
    nome: 'maça',
    disponivel: true
}

const fruta3 = {
    nome: 'uva',
    disponivel: true
}

// C -
function funcaoFruta(fruta){
    carrinho.push(fruta)
}

funcaoFruta(fruta1)
funcaoFruta(fruta2)
funcaoFruta(fruta3)

// D -

console.log(carrinho)