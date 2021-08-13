// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  //implemente sua lógica aqui
  altura = Number(prompt('Digite a altura do retângulo?'))
  lagura = Number(prompt('Digite a lagura do retângulo?'))
  area = altura * lagura
  console.log(area)
}

calculaAreaRetangulo()


// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  anoAtual = Number(prompt('Qual o ano atual?'))
  anoNascimento = Number(prompt('Qual o ano de nascimento?'))
  idade = anoAtual - anoNascimento
  console.log (idade)
}

imprimeIdade()

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  IMC = peso / (altura * altura)
  return IMC
}

imcCalcula = calculaIMC(90, 1.82)

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  nome = prompt('Qual seu nome?')
  idade = Number(prompt('Qual sua idade?'))
  email = prompt('Qual seu email')
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

imprimeInformacoesUsuario()

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  cor1 = prompt('Qual sua cor favorita?')
  cor2 = prompt('Qual sua segunda cor favorita?')
  cor3 = prompt('Qual sua terceira cor favorita?')
  console.log([cor1, cor2, cor3])
}

imprimeTresCoresFavoritas()

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  return string.toUpperCase()
}

retornaStringEmMaiuscula("palmeiras!!!")

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  vender = custo / valorIngresso
  return vender
}

calculaIngressosEspetaculo(3000, 50)

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  tamanho = string1 >= string2
  return tamanho
}

checaStringsMesmoTamanho('Maria', 'Luiza')

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return array [0]
}

retornaPrimeiroElemento([2, 4, 6])

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  return array[array.length -1] 
}

retornaUltimoElemento([2, 4, 6])

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  let primeira = array[0]
  array[0] = array[array.length -1]
  array[array.length -1] = primeira
  return array
}

trocaPrimeiroEUltimo([1, 2, 3])

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  igualdade = string1.toLowerCase()=== string2.toLowerCase()
  return igualdade
}

checaIgualdadeDesconsiderandoCase('maria','MARIA')

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}