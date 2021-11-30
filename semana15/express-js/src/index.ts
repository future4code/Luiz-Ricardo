import express from "express"
import cors from "cors"
import { countries } from "./data"

const app = express()

app.use(express.json())
app.use(cors())

//ENDPOINT 1 - BUSCAR TODOS OS PAÍSES

app.get("/countries", (req, res) => {
    
    const result = countries.map(country => ({
        id: country.id,
        name: country.name
    }))
    
    res.status(200).send(result)
})

//ENDPOINT 3 - BUSCAR COM FILTROS

app.get("/countries/search", (req, res) => {

    let result = countries

    try {
        if (!req.query.name && !req.query.capital && !req.query.continent) {
            throw new Error("Nenhum parâmetro foi passado")
        }

        if (req.query.name) {
            result = result.filter(country => 
                country.name.includes(req.query.name as string)
            )
        }

        if (req.query.capital) {
            result = result.filter(country => 
                country.capital.includes(req.query.capital as string)
            )
        }

        if (req.query.continent) {
            result = result.filter(country => 
                country.continent.includes(req.query.continent as string)
            )
        }
        
        res.status(200).send(result)

    } catch (erro: any) {
        res.status(400).send({message: erro.message})
    }
})

//ENDPOINT 2 - BUSCAR PAÍS POR ID

app.get("/countries/:id",
    (req, res) => {
        const id = req.params.id

        const result = countries.find((country) => {
            return country.id === Number(id)
        })

        if (result) {
            res.status(200).send(result)
        } else {
            res.status(404).send("País não encontrado!")
        }
    }
)

//ENDPOINT 4 - EDITAR PAÍS

app.put("/countries/:id", (req, res) => {
    try {
        const id = req.params.id
    
        let result = countries.find((country) => country.id === Number(id))
    
        const newResult = {
          id: result?.id,
          name: req.body.name,
          capital: req.body.capital,
          continent: result?.continent,
        }
    
        if (result === undefined) {
          throw new Error("Nenhum resultado foi encontrado")
        }
    
        result.name = newResult.name
    
        res.status(200).send(newResult)
    } catch (erro: any) {
        res.status(400).send({ message: erro.message })
    }
})    

app.listen(3003, () => {
    console.log("Servidor Pronto!")
})