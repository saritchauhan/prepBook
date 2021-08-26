import mongoose from "mongoose";
const Schema = mongoose.Schema;

const postSchema = new Schema({
    
    username:{type:String, required:true},
    caption:{type:String},
    image:{type:String}
    
}, {timestamps:true})

export default mongoose.model("Post", postSchema)