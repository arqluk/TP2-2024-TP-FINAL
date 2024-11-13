import express from "express"
import ProdRoutes from "./routes/ProductsRoute.js"
import UserRoutes from "./routes/UsersRoute.js"
import MongoConnection from "./models/MongoConnection.js"

const app = express()
const PORT = 8080

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use("/", new ProdRoutes().start())
app.use("/", new UserRoutes().start())

await MongoConnection.connection()
app.listen(PORT, () => console.log(`Server running on: http://localhost:${PORT}`))
app.on("Error", (err) => console.error(err))