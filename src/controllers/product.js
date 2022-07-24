import slugify from "slugify"
import Product from "../models/product"

export const create = async (req,res)=>{
const slug= slugify(req.body.name)
req.body.slug=slug
 try {
    const products= await new Product(req.body).save()
    res.json(products)
 } catch (error) {
    res.status(400).json({
    message:"khong them duoc du lieu"
    })
 }
}
export const list = async (req,res)=>{
    try {
        const products= await Product.find()
        res.json(products)
    } catch (error) {
        res.status(400).json({
            message:"khong hien thi"
            })
    }
}
export const read = async (req,res)=>{
    try {
        const products= await Product.findOne({_id:req.params.id}).exec()
        res.json(products)
    } catch (error) {
        res.status(400).json({
            message:"khong hien thi"
            })
    }
}
export const remove = async (req,res)=>{
    try {
        const products= await Product.findOneAndDelete({_id:req.params.id}).exec()
        res.json(products)
    } catch (error) {
        res.status(400).json({
            message:"khong xoa"
            })
    }
}
export const update = async (req,res)=>{
    const slug= slugify(req.body.name)
req.body.slug=slug
    try {
        const products= await Product.findOneAndUpdate({_id:req.params.id},req.body,{new:true}).exec()
        res.json(products)
    } catch (error) {
        res.status(400).json({
            message:"khong cap nhat duoc du lieu"
            })
    }
}