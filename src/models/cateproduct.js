import mongoose,{Schema} from "mongoose";
const cateproductSchema = new Schema({
    name:{
        type:String,
        require:true,
        minlength:3
    },
    image:{
        type:String,
        require:true
    },
    slug:{
        type:String,
        require:true
    }
},{timestamps:true})

export default mongoose.model("Cateproduct",cateproductSchema)