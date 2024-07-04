import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
        min:5,
        max:20
    },
    phone:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        max:10
    },
    username:{
        type:String,
        required:true,
        trim:true,
        unique:true,
        min:5,
        max:20
    },
    password:{
        type:String,
        required:true,
        trim:true,
        max:6
    },

})

const user = mongoose.model('user',userSchema);

export default user;