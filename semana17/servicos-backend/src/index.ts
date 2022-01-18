import { app } from "./app"
import { getAddressInfo } from "./services/getAddressInfo"
import createAddress from "./endpoint/createAddress"

getAddressInfo("05001200", 1705, "Casa do Palmeiras").then(console.log)

app.post("/address/signup", createAddress)