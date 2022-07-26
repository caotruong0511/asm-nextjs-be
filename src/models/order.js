import mongoose,{ Schema} from "mongoose";

const orderSchema = new Schema({
    userId:{
        type:String,
        require:true
        
    },
  customerName:{
    type:String,
    require:true,
    minlength:3
  },
    addpress:{
     type:String,
     require:true
    },
    phone:{
        type:String,
        require:true 
    },
    email:{
        type:String,
        require:true 
    },
    totalPrice:{
        type:String,
        require:true 
    },
    message:{
        type:String,
        require:true 
    },
    status:{
        type:String,
        require:true 
    }
  
},{timestamps:true})
export default mongoose.model("Order",orderSchema)