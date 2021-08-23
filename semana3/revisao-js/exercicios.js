// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length
}

retornaTamanhoArray([2, 3, 4, 5, 6])

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    return array.reverse()
}

retornaArrayInvertido([10, 25, 30, 45, 50])

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    return array.sort(function(a,b){
        return a - b
    })
}

retornaArrayOrdenado([5, 3, 4, 2, 1])

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    return numerosPares = array.filter(
        (numero) => {return numero % 2 === 0}
    )
}

retornaNumerosPares([1, 2, 3, 4, 5, 6])

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
//     numerosElevados = array.filter(
//         (numero) => { numero % 2 === 0}
//     )
//     for(let i = [0]; numerosParesElevadosADois; i++){
//         numerosParesElevadosADois[i] = numerosParesElevadosADois[i] * numerosParesElevadosADois[i]
//     } 
//     return numerosParesElevadosADois
}

// retornaNumerosParesElevadosADois(1, 2, 3, 4, 5, 6)

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

retornaMaiorNumero([5, 10, 25, 15, 20, 30])

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

retornaObjetoEntreDoisNumeros(5,20)

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
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