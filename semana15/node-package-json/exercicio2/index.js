const operacao = process.argv[2]
const num1 = Number(process.argv[3])
const num2 = Number(process.argv[4])

    switch(operacao){
        case"soma":
            console.log("Resposta:", num1 + num2)
            break;
        case"subtrair":
            console.log("Resposta:", num1 - num2)
            break;
        case"multiplicar":
            console.log("Resposta:", num1 * num2)
            break;
        case"dividir":
            console.log("Resposta:", num1 / num2)
            break;
    }