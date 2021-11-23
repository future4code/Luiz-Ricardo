const listaDeTarefas = [
    "Arrumar a casa",
    "Fazer o almoço",
    "Passear com a Jamaica"
]

const novaTarefa = listaDeTarefas.push(process.argv[2]);
console.log(listaDeTarefas)