// Exercícios de Interpretação de Código

//Questão 1
// A -
// Objeto 0 - Array (3)
// Objeto 1 - Array (3)
// Objeto 2 - Array (3)

//Questão 2
// A -
// "Amanda Rangel", "Laís Petra", "Letícia Chijo"

//Questão 3
// A -
// "Mandi", "Laura"



// Exercícios de Escrita de Código

//Questão 1

const pets = [
	{ nome: "Lupin", raca: "Salsicha"},
	{ nome: "Polly", raca: "Lhasa Apso"},
	{ nome: "Madame", raca: "Poodle"},
	{ nome: "Quentinho", raca: "Salsicha"},
	{ nome: "Fluffy", raca: "Poodle"},
	{ nome: "Caramelo", raca: "Vira-lata"},
 ]

// A -
const nomesDosPets = pets.map(pets => pets.nome)
console.log(nomesDosPets)

// B -
const petsSalsichas = pets.filter(pets => pets.raca === "Salsicha")
console.log(petsSalsichas)

// C -
const petsPoodles = pets.filter(pets => pets.raca === "Poodle").map(pets => {
	return `Você ganhou um cupom de desconto de 10% para tosar o/a ${pets.nome}!`
})
console.log(petsPoodles)

//Questão 2

const produtos = [
	{ nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
	{ nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
	{ nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
	{ nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
	{ nome: "Leite", categoria: "Bebidas", preco: 2.99 },
	{ nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
	{ nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
	{ nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
	{ nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
	{ nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]

// A -
const nomesDosProdutos = produtos.map(produtos => produtos.nome)
console.log(nomesDosProdutos)

// B -


// C -
const bebidas = produtos.filter(produtos => produtos.categoria === "Bebidas")
console.log(bebidas)

// D - 
const localizarPalavraYpe = produtos.filter(produtos => produtos.nome.includes("Ypê"))
console.log(localizarPalavraYpe)

// E -
const frase = produtos.filter(produtos => produtos.nome.includes("Ypê")).map(produtos => {
	return `Compre ${produtos.nome} por R$ ${produtos.preco}0.`
})
console.log(frase)