// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    return array.sort(function(a,b){
        return a - b
    })
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    return numerosPares = array.filter(
        (numero) => {return numero % 2 === 0}
    )
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    numerosPares = array.filter(
        (numero) => { return numero % 2 === 0}
    ) 
    numerosElevadosADois = numerosPares.map((valor) => valor **2)
    return numerosElevadosADois
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let maior = 0;
    for (let i = 0; i < array.length; i++){
        if(array[i] > maior){
            maior = array[i];
        }
    }
    return maior
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    if(num1 > num2){
        maiorNumero = num1
        menorNumero = num2
    } else {
        maiorNumero = num2
        menorNumero = num1
    }
    maiorDivisivelPorMenor = maiorNumero % menorNumero === 0
    diferenca = maiorNumero - menorNumero
    return {maiorNumero, maiorDivisivelPorMenor, diferenca}
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {


   
}



// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if((ladoA === ladoB) && (ladoB === ladoC) && (ladoC === ladoA)){
        return "Equilátero"
    } else if((ladoA !== ladoB) != (ladoB !== ladoC) !== (ladoC !== ladoA)){
        return "Escaleno"
    } else { 
        return "Isósceles"
    }
}

classificaTriangulo(5, 4, 5)

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    array.sort(function(a,b){
        return a - b
    })
    return [1],[array.length-1]
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    filme = {
        nome: 'O Diabo Veste Prada',
        ano: 2006,
        diretor: 'David Frankel',
        atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']
     }
    frase = `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`
     return frase
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}