import express from "express";
import 'express-async-errors'
import morgan from "morgan";
import {dirname} from 'path'
import { fileURLToPath } from "url";
import path from 'path'

import helmet from 'helmet'
import xss from 'xss-clean'
import mongoSanitize from "express-mongo-sanitize";
import cookieParser from "cookie-parser";
import notFoundMiddleware from "./middleware/not-found.js";
import errorHandlerMiddleware from "./middleware/error-handler.js";
import authenticateUser from "./middleware/auth.js"

import dotenv from 'dotenv'
import connectDB from "./db/connect.js";
import authRouter from "./routes/authRoutes.js"
import jobsRouter from "./routes/jobsRoutes.js"



dotenv.config()
const app = express()
const port = process.env.PORT || 5000;

if(process.env.NODE_ENV !== 'production'){
    app.use(morgan('dev'))
}

const __dirname = dirname(fileURLToPath(import.meta.url))
app.use(express.static(path.resolve(__dirname,'./client/build')))


app.use(express.json())
app.use(cookieParser())
// security package
 app.use(helmet())
 app.use(xss())
 app.use(mongoSanitize())
app.get('/',(req,res)=>{
    res.json({msg:'welcome bharat'})
})
app.get('/api',(req,res)=>{
    res.json({msg:'welcome   aa bharat'})
})

//routers
app.use('/api/auth',authRouter)
app.use('/api/jobs',authenticateUser,jobsRouter)

app.get('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./client/build','index.html'))
})

//middleware
app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)


const startDB = async ()=>{
    try {
        await connectDB(process.env.MONGO_URL)
    app.listen(port,()=>{console.log(`server is listening on port ${port}`)})

    } catch (error) {
        console.log(error);
    }
}
startDB()