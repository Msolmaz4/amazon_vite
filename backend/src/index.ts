import cors from  'cors'
import express ,{ Request , Response} from 'express'
import {sampleProducts } from './data'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
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
app.get('/api/products', (req:Request,res:Response) => {
    res.json(sampleProducts)
})
app.get('/api/products/:slug', (req:Request,res:Response) => {
    res.json(sampleProducts.find((x)=>x.slug === req.params.slug))
})
const PORT = 4000
app.listen(PORT , ()=>{
    console.log(`server saatart at ${PORT}`)
})