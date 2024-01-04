import express, { Application } from "express"
import userRoutes from "./routes/user";

const app: Application = express()

app.use("/api/users/", userRoutes)
const PORT = 4000

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

export default app
