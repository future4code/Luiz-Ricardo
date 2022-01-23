import { app } from "./app"
import { signup } from "./endpoints/signup"
import { login } from "./endpoints/login"
import { getProfile } from "./endpoints/getProfile"
import { getProfileById } from "./endpoints/getProfileById"
import { createRecipe } from "./endpoints/createRecipe"
import { getRecipeById } from "./endpoints/getRecipeById"

app.post("/signup", signup)
app.post("/login", login)
app.get("/user/profile", getProfile)
app.get("/user/:id", getProfileById)
app.post("/recipe", createRecipe)
app.get ("/recipe/:id", getRecipeById)