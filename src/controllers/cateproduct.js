import Cateproduct from "../models/cateproduct"
import Product from "../models/product"
export const list=async(req,res)=>{
try {
    const cateproduct = await Cateproduct.find()
    res.json(cateproduct)
} catch (error) {
     res.status(400).json({
        message:"khong list duoc danh sach"
     })
}
}
export const read=async(req,res)=>{
    try {
        const cateproduct = await Cateproduct.findOne({_id:req.params.id}).exec()
        const products= await Product.find({cateproduct}).exec()
        res.json({
            products,
            cateproduct
        })
    } catch (error) {
         res.status(400).json({
            message:"khong list duoc danh sach"
         })
    }
    }
    export const remove=async(req,res)=>{
        try {
            const cateproduct = await Cateproduct.findOneAndDelete({_id:req.params.id}).exec()
            res.json(cateproduct)
        } catch (error) {
             res.status(400).json({
                message:"khong list duoc danh sach"
             })
        }
        }
    export const create=async(req,res)=>{
        try {
            const cateproducts = await new Cateproduct(req.body).save()
            res.json(cateproducts)
        } catch (error) {
             res.status(400).json({
                message:"khong them duoc du lieu"
             })
        }
        }
        export const update=async(req,res)=>{
            try {
                const cateproduct = await Cateproduct.findOneAndUpdate({_id:req.params.id},req.body,{new:true}).exec()
                res.json(cateproduct)
            } catch (error) {
                 res.status(400).json({
                    message:"khong list duoc danh sach"
                 })
            }
            }