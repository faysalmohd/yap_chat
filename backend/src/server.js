import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import router from './routes/auth.route.js'
import dotenv from 'dotenv'
import { connectDB } from './lib/db.js'
import { DefaultPath } from './controller/auth.controller.js'

dotenv.config()

const PORT = process.env.PORT
const URL = process.env.URL

const app = express()

app.use(cors())

app.use(express.json())

app.use(cookieParser())

app.use('/api/auth', router)

app.use(DefaultPath)

app.listen(PORT, () => {
    console.log(`>>> Server running on port ${PORT}`)
    console.log(`>>> URL => ${URL}:${PORT}`)
    connectDB()
})