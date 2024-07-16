import mongoose from "mongoose";


const messageSchema = new mongoose.Schema({
    conversationID:{
        type:String,
        required:true,
    },
    senderID:{
        type:String,
        required:true,
    },
    message:{
        type:String,
    },
})

const Messages = mongoose.model('Message',messageSchema);

export default Messages;