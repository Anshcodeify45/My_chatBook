
import User from "../Model/userSchema.js"
import Conversation from "../Model/Conversation.js"
import { request, response } from "express"
import Messages from "../Model/Messages.js"


export const userSignup = async (request ,response) =>{
        try{
            
            const exist = await User.findOne({username:request.body.username})
            if(exist){
                return response.status(401).json({message:"username already exist"})
            }

            const user=request.body
            const newUser = new User(user);
            await newUser.save();

            response.status(200).json({message:user})
        }catch(error){
            response.status(500).json({message:error.message});
        }
}


export const userLogin = async(request,response)=>{
    try{
            
            const username=request.body.username;
            const password=request.body.password;

            let user = await User.findOne({username:username , password:password});

            if(user){
                return response.status(200).json({data:user})
            }
            else{
                return response.status(401).json('invalid login')
            }

    }  catch(error)  {
                response.status(500).json("Error",error.message);
    }
}

export const userConversation = async(request,response) => {
    try{
            const {senderId , receiverId} = request.body;
            const newConversation = new Conversation({ members : [senderId , receiverId] });
            await newConversation.save();
            response.status(200).send('Conversation created successfully');
    }catch(error){
             response.status(500).json("Error",error.message);
    }
}

export const userMessages = async(request,response) => {
    try{
            const userId=request.params.userId;
            const conversation = await Conversation.find({members:{$in : [userId]}});
            const conversationUserdata = Promise.all( conversation.map( async (chat) => {
                const receiverId = chat.members.find((member)=> member !== userId);
                const usermsg= await User.findById(receiverId);
                return{  user: {username:usermsg.username , name: usermsg.name} , conversationID: chat._id}
            })) 
            response.status(200).json(await conversationUserdata);
    }catch(error){
            console.log(error,'Error');
    }
}


export const userMsg = async( request,response) => {
    try{
            const {conversationID ,senderId , message} = request.body;
            if(!senderId || !message) return response.status(400).send('Pleaser fill the form')
                if(!conversationID && receiverId){
                    const newConversation = new Conversation({members : [senderId , receiverId]});
                    await newConversation.save();
                    const newMessage = new Messages({conversationID:newConversation._id , senderId , message});
                    await newMessage.save();
                    return response.status(200).send('Message sent successfully');
                }else if(!conversationID && !receiverId){
                    return response.status(400).send('Please fill the required from');
                }


            const newMsg = new Messages({conversationID,senderId,message});
            await newMsg.save();
            response.status(200).send('Message sent successfully');
    }catch(error){
        console.log(error,'Error');
    }
}


export const getMsg = async(request,response)=>{
    try{
            const conversationID = request.params.conversationID;
            if(conversationID === 'new') return response.status(200).json([])
            const msg = await Messages.find({conversationID});
            const msgerData = Promise.all(msg.map(async(message) => {
                const userDt = await User.findById(message.senderId);
                return {user: {username:userDt.username,name:userDt.name},message:message.message}
            }));

            response.status(200).json(await msgerData);

    }catch(error){
            console.log('Error',error);
    }
}


export const userData = async (request,response) =>{
    try{
            const users = await User.find();
            const Data = Promise.all(users.map(async(user) =>{
                return { user : { username: user.username , fullname:user.name}, userId:user._id}
            }))

            response.status(200).json(await Data);
    }catch(error){
            console.log('Error',error);
    }
}