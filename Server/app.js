import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import authroutes from './Routes/authRoutes.js'
import userblogroutes from './Routes/userBlogRoutes.js'
import errorMiddleware from './Middlewares/errorMiddleware.js'

const app=express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors({
    origin:'*',
    credentials:true
}))
app.use(cookieParser())
//app.use(errorMiddleware())

app.use('/user',authroutes)
app.use('/blog',userblogroutes)
app.use(errorMiddleware)


export default app

