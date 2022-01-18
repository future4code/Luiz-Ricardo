import { app } from "./app"
import { registerUsers } from "./endpoints/user/registerUsers"
import { getAllUsers } from "./endpoints/user/getALLUsers"
import { registerProducts } from "./endpoints/product/registerProducts"
import { getAllProducts } from "./endpoints/product/getAllProducts"
import { registerPurchases } from "./endpoints/purchase/registerPurchases"
import { getUserPurchases } from "./endpoints/purchase/getUserPurchases"

app.post("/users", registerUsers)
app.get("/users", getAllUsers)

app.post("/products", registerProducts)
app.get("/products", getAllProducts)

app.post("/purchases", registerPurchases)
app.get("/users/:user_id/purchases", getUserPurchases)