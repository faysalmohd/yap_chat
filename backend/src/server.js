import express from 'express'
import cors from 'cors'
import router from './routes/auth.route.js'
import dotenv from 'dotenv'
import { connectDB } from './lib/db.js'

dotenv.config()

const PORT = process.env.PORT
const URL = process.env.URL

const app = express()

app.use(cors())

app.use('/api/auth', router)

app.listen(PORT, () => {
    console.log(`>>> Server running on port ${PORT}`)
    console.log(`>>> URL => ${URL}:${PORT}`)
    connectDB()
})