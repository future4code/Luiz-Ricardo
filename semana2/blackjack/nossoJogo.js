/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
console.log("Boas vindas ao jogo de Blackjack!")

if(confirm("Quer iniciar uma nova rodada?")) {
	const primeiraCartaUsuario = comprarCarta()
   const segundaCartaUsuario = comprarCarta()
   const primeiraCartaComputador = comprarCarta()
   const segundaCartaComputador = comprarCarta()
   
   let carta1 = primeiraCartaUsuario
   let carta2 = segundaCartaUsuario
   let carta3 = primeiraCartaComputador
   let carta4 = segundaCartaComputador

   somaDoUsuario = primeiraCartaUsuario.valor + segundaCartaUsuario.valor
   somaDoComputador = primeiraCartaComputador.valor + segundaCartaComputador.valor
   
   console.log(`Usúario - cartas: ${carta1.texto} ${carta2.texto} = pontuação ${somaDoUsuario}`)
   console.log(`Computador - cartas: ${carta3.texto} ${carta4.texto} = pontuação ${somaDoComputador}`)

   if (somaDoUsuario > somaDoComputador){
      console.log("Você ganhou!")
   } else if (somaDoUsuario < somaDoComputador){
      console.log("Você perdeu!")
   } else if (somaDoUsuario === somaDoComputador) {
      console.log("Empate!")
   }

} else {
	console.log("O jogo acabou!")
}