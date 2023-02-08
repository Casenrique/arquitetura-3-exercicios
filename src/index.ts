import express from 'express'
import cors from 'cors'
import { courseRouter } from './router/courseRouter'

const app = express()

app.use(cors())
app.use(express.json())

app.listen(3004, () => {
    console.log(`Servidor rodando na porta ${3004}`)
})

app.use("/courses", courseRouter)
