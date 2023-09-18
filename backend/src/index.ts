import cors from  'cors'
import express  from 'express'
//import {sampleProducts } from './data'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import { productRouter } from './routers/productRouter'
import { seedRouter } from './routers/seedRouter'
dotenv.config()

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost/tsamazon'
mongoose.set('strictQuery' ,true)
mongoose
.connect(MONGO_URI)
.then(()=>{
    console.log('conect momgo db')
})
.catch(()=>{
    console.log('error mongo')
})





const app = express()
app.use(
    cors({
        credentials:true,
        origin:['http://localhost:5173']
    })
)


app.use('/api/products', productRouter)
app.use('/api/seed', seedRouter)




const PORT = 4000
app.listen(PORT , ()=>{
    console.log(`server saatart at ${PORT}`)
})