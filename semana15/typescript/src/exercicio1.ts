// A:
// const minhaString: string = 10
// Dar o seguinte erro: O tipo 'number' não pode ser atribuído ao tipo 'string'.

// B:
let meuNumero: number = 12
// Para ela aceitar strings, devemos colocar da seguinte forma:
let novoNumero: number | string

// C:
type pessoa = {
    nome: string
    idade: number
    corFavorita: string
}

const luiz: pessoa = {
    nome: "Luiz Ricardo",
    idade: 35,
    corFavorita: "verde"
}

const maria: pessoa = {
    nome: "Maria Clara",
    idade: 12,
    corFavorita: "azul"
}

const luiza: pessoa = {
    nome: "Luiza",
    idade: 3,
    corFavorita: "vermelho"
}

// D:
enum CoresDoArcoIris {
    VERMELHO = "vermelho",
    LARANJA = "laranja",
    AMARELO = "amarelo",
    VERDE = "verde",
    AZUL = "azul",
    ANIL = "anil",
    VIOLETA = "violeta"
}

type pessoaEnum = {
    nome: string
    idade: number
    corFavorita: CoresDoArcoIris
}

const ricardo: pessoaEnum = {
    nome: "Luiz Ricardo",
    idade: 35,
    corFavorita: CoresDoArcoIris.VERDE
}

const clara: pessoaEnum = {
    nome: "Maria Clara",
    idade: 12,
    corFavorita: CoresDoArcoIris.AZUL
}

const lulis: pessoaEnum = {
    nome: "Luiza",
    idade: 3,
    corFavorita: CoresDoArcoIris.VERMELHO
}
