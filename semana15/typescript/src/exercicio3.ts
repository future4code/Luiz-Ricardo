// A:
type post = {
    autor: string
    texto: string
}

const posts: post[] = [
    {
      autor: "Alvo Dumbledore",
      texto: "Não vale a pena viver sonhando e se esquecer de viver"
    },
    {
      autor: "Severo Snape",
      texto: "Menos 10 pontos para Grifinória!"
    },
    {
      autor: "Hermione Granger",
      texto: "É levi-ô-sa, não levio-sá!"
    },
    {
      autor: "Dobby",
      texto: "Dobby é um elfo livre!"
    },
    {
      autor: "Lord Voldemort",
      texto: "Avada Kedavra!"
    }
]

// B:
//A entrada está sendo o array de posts e um autor, a saída está sendo o post do autor informado na entrada.
function buscarPostsPorAutor(posts: post[], autorInformado: string) {
    return posts.filter((post) => {
        return post.autor === autorInformado
    })
}
