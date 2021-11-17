// A:
//A entrada está sendo um array de números e a saída está sendo um objeto com propriedades que são "maior, menos e media".

type estatisticas = {
    maior: number
    menor: number
    media: number
}

function obterEstatisticas(numeros: number[]): estatisticas {

    const numerosOrdenados: number[] = numeros.sort((a, b) => a - b)

    let soma = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

// B:

// C:
type amostraDeIdades = {
    numeros: number[],
    obterEstatisticas: (numeros: number[]) => estatisticas
}
