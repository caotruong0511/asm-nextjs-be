import Order from "../models/order";

export const list =async(req,res)=>{
try {
const orders = await Order.find()
res.json(orders)
} catch (error) {
res.status(400).json({
    message:"không hiển thị được dữ liệu"
})
}
}

export const read=async(req,res)=>{
    try {
        const orders = await Order.findOne({_id:req.params.id})
        res.json(orders)
    } catch (error) {
         res.status(400).json({
            message:"không hiển thị được dữ liệu"
         })
    }
    }
    export const remove=async(req,res)=>{
        try {
            const orders = await Order.findOneAndDelete({_id:req.params.id})
            res.json(orders)
        } catch (error) {
             res.status(400).json({
                message:"Không xóa được dữ liệu"
             })
        }
        }
    export const create=async(req,res)=>{
        try {
            const orders = await new Order(req.body).save()
            res.json(orders)
        } catch (error) {
             res.status(400).json({
                message:"Không thêm mơi được dữ liệu"
             })
        }
        }
        export const update=async(req,res)=>{
            try {
                const orders = await Order.findOneAndUpdate({_id:req.params.id},req.body,{new:true})
                res.json(orders)
            } catch (error) {
                 res.status(400).json({
                    message:"Không cập nhật được dữ liệu"
                 })
            }
            }