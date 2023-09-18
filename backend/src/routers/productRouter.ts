import express, { Request, Response } from 'express'
import { ProductModel } from '../models/productModel'
import asyncHandler from 'express-async-handler'

export const productRouter = express.Router()
// /api/products
//bu arada npm  i express-async-handler indirdik hatalari yakalamaki icn
//binu yuklerken uyumsuzluk alirsan sonua--force yaz
//burda aciklma var https://expressjs.com/tr/guide/error-handling.html

productRouter.get('/',
 
asyncHandler(async (req,res)=>{
    const products = await ProductModel.find()
    res.json(products)
})
)
//.api/slug/tshirt
productRouter.get(
    '/slug/:slug',
asyncHandler(async (req,res)=>{
    const product = await ProductModel.findOne({slug:req.params.slug})
    if(product){
        res.json(product)
    }else{
        res.status(404).json({message :'product not found'})
    }

})
)