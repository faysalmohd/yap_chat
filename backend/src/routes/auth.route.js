import express from 'express'
import { DefaultPath, Login, Logout, Signup } from '../controller/auth.controller.js'

const router = express.Router()

router.all('/', DefaultPath)

router.post('/signup', Signup)

router.post('/login', Login)

router.post('/logout', Logout)

export default router