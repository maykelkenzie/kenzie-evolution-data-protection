import express from "express";
import { databaseConect} from "./database/index.js";
import 'dotenv/config'
import userRouter from "./routes/users.router.js";


const app = express()
const port = process.env.APP_PORT


app.use(express.json())
app.use('/users', userRouter)


app.listen(port, async () => {
    await databaseConect()
    console.log('app rodando na porta', port)
})