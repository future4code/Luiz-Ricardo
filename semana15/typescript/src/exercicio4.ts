type pokemon = {
	name: string,
    types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
    name: "Charmander",
    types: "Fire",
    healthPoints: 28
}

const pokemon2: pokemon = {
    name: "Bulbasaur",
    types: "Grass/Poison",
    healthPoints: 31
}

const pokemon3: pokemon = {
    name: "Squirtle",
    types: "Water",
    healthPoints: 35
}

// A: Usaria o comando tsc exercicio4.ts
// B: Sim, usaria somente o tsc
// C: Sim, o comando tsc sem parâmetros, converte todos os arquivos com a extensão .ts que encontrar
// D: Mudou a configuração do rootDir e outDir, onde no arquivo em aula espeficicamos um caminho, utilizamos também o sourceMap e o noImplicitAny.