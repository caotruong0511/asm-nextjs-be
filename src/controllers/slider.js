import Slider from "../models/slider";

export const list=async(req,res)=>{
try {
    const slider = await Slider.find()
    res.json(slider)
} catch (error) {
     res.status(400).json({
        message:"khong list duoc danh sach"
     })
}
}
export const read=async(req,res)=>{
    try {
        const slider = await Slider.findOne({_id:req.params.id})
        res.json(slider)
    } catch (error) {
         res.status(400).json({
            message:"khong list duoc danh sach"
         })
    }
    }
    export const remove=async(req,res)=>{
        try {
            const slider = await Slider.findOneAndDelete({_id:req.params.id})
            res.json(slider)
        } catch (error) {
             res.status(400).json({
                message:"khong list duoc danh sach"
             })
        }
        }
    export const create=async(req,res)=>{
        try {
            const slider = await new Slider(req.body).save()
            res.json(slider)
        } catch (error) {
             res.status(400).json({
                message:"khong them duoc du lieu"
             })
        }
        }
        export const update=async(req,res)=>{
            try {
                const slider = await Slider.findOneAndUpdate({_id:req.params.id},req.body,{new:true})
                res.json(slider)
            } catch (error) {
                 res.status(400).json({
                    message:"khong list duoc danh sach"
                 })
            }
            }