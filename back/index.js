import express from "express"
import router from "./routes/tasks.routes.js"
import cors from "cors"

const app = express()
const PORT = 4040

app.use(cors())
app.use(express.json())
app.use(router)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
