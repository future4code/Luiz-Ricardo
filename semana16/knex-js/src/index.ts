import {Request, Response} from "express"
import app from "./app"
import connection from "./connection"

const searchActorByName = async (name: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM Actor WHERE name = "${name}"
  `)
  return result[0]
}

const countActorsByGender = async (gender: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
  `)
  const count = result[0][0].count
  return count
}

const updateSalary = async (id: string, salary: number): Promise<any> => {
  await connection("Actor")
    .update({
      salary: salary
    })
    .where("id", id)
}

const deleteActor = async (id: string): Promise<void> => {
  await connection("Actor")
    .delete()
    .where("id", id)
}

const avgSalary = async (gender: string): Promise<any> => {
  const result = await connection("Actor")
    .avg("salary as average")
    .where({gender})
    return result[0].average
}

const getActorById = async (id: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM Actor WHERE id = '${id}'
  `)
  return result [0][0]
  
}

app.get("/actor/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id
    const actor = await getActorById(id)
    res.status(200).send(actor)
  } catch (error: any) {
      res.status(400).send({message: error.message})
  }
})

app.get("/actor", async (req: Request, res: Response) => {
  try {
    const count = await countActorsByGender(req.query.gender as string)
    res.status(200).send({quantity: count})
  } catch (error: any) {
      res.status(400).send({message: error.message})
  }
})

app.put("/actor", async (req: Request, res: Response) => {
  try {
    await updateSalary(req.body.id, req.body.salary);
    res.status(200).send({message: "Success"})
  } catch (error: any) {
      res.status(400).send({message: error.message})
  }
})

app.delete("/actor/:id", async (req: Request, res: Response) => {
  try {
    await deleteActor(req.params.id)
  } catch (error: any) {
      res.status(400).send({message: error.message})
  }
})