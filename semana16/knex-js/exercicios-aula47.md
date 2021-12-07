<h3>Exercício 1<h3>

A: 

Quando usamos o raw, ele nos devolve o resultado da query e outras informações do banco, do jeito que o mySQL devolve, e para conseguirmos acessar as informações que realmente nos interessa é atraves da primeira posição do array de resposta.

B:

const searchActorByName = async (name: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM Actor WHERE name = "${name}"
  `)
  return result[0]
}

C:

const countActorsByGender = async (gender: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
  `)
  const count = result[0][0].count
  return count
}

<h3>Exercício 2<h3>

A:

const updateSalary = async (id: string, salary: number): Promise<any> => {
  await connection("Actor")
    .update({
      salary: salary
    })
    .where("id", id)
}

B:

const deleteActor = async (id: string): Promise<void> => {
  await connection("Actor")
    .delete()
    .where("id", id)
}

C:

const avgSalary = async (gender: string): Promise<any> => {
  const result = await connection("Actor")
    .avg("salary as average")
    .where({gender})
    return result[0].average
}

<h3>Exercício 3<h3>

A:

app.get("/actor/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id
    const actor = await getActorById(id)
    res.status(200).send(actor)
  } catch (error: any) {
      res.status(400).send({message: error.message})
  }
})

B:

app.get("/actor", async (req: Request, res: Response) => {
  try {
    const count = await countActorsByGender(req.query.gender as string)
    res.status(200).send({quantity: count})
  } catch (error: any) {
      res.status(400).send({message: error.message})
  }
})

<h3>Exercício 4<h3>

A:

app.put("/actor", async (req: Request, res: Response) => {
  try {
    await updateSalary(req.body.id, req.body.salary);
    res.status(200).send({message: "Success"})
  } catch (error: any) {
      res.status(400).send({message: error.message})
  }
})

B:

app.delete("/actor/:id", async (req: Request, res: Response) => {
  try {
    await deleteActor(req.params.id)
  } catch (error: any) {
      res.status(400).send({message: error.message})
  }
})