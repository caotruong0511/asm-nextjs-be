 import mongoose,{Schema,ObjectId} from "mongoose";

 const orderDetailSchema = new Schema({
    oderId:{
        type:ObjectId,
        ref:"Order"
    },
    productId:{
        type:ObjectId,
        ref:"Product"
    },
    productPrice:{
        type:Number,
        require:true
    },
    quantity:{
        type:Number,
        require:true
    }
 },{timestamps:true})

 export default mongoose.model("Orderdetai",orderDetailSchema)