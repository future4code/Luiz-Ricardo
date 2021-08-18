// Exercícios de Interpretação de Código

//Questão 1
// Está executando um LOOP, que é uma estrutura que permitem representar eventos que se repetem.
// 10

//Questão 2
// A -
// 19, 21, 23, 25, 27, 30

// B -
// Não.

//Questão 3
// *, **, ***, ****



// Exercícios de Escrita de Código

//Questão 1

const bichosEstimacao = Number(prompt('Quantos bichinhos de estimação você tem?'))

// A -
if(bichosEstimacao === 0){
    console.log("Que pena! Você pode adotar um pet!")
}

// B -
i = 0
arrayNome = []

while(i < bichosEstimacao){
    const nome = prompt('Digite o nome dele(s)')
    i = i + 1
    arrayNome.push(nome)
}

// C -
console.log(arrayNome)


//Questão 2

arrayOriginal = [20,35,40,55,60]

// A - 
function imprimirValores(){
    for( let array of arrayOriginal){
        console.log(array)
    }
}

imprimirValores()

// // B - 
function imprimirDividoPor10(){
    for(let divisão of arrayOriginal){
        console.log(divisão / 10)
    }
}

imprimirDividoPor10()

// C -
novoArray = []
function imprimirNovoArray(){
    for(let novo of arrayOriginal){
        if(novo % 2 === 0){
            novoArray.push(novo)
        }
    }
    console.log(novoArray)
}

imprimirNovoArray()

// D -
arrayStrings = []

function imprimirStrings(){
    for(let i = 0; i < arrayOriginal.length; i++){
        const numero = arrayOriginal[i]
        arrayStrings.push(`O elemento do índex ${i} é: ${numero}`)
    }
    console.log(arrayStrings)
}

imprimirStrings()
