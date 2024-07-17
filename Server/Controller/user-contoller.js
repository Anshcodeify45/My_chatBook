
import User from "../Model/userSchema.js"
import Conversation from "../Model/Conversation.js"


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
            const{senderId , receiverId}=request.body;
            const newConversation = new Conversation({members : [senderId , receiverId]});
            await newConversation.save();
            response.status(200).send('Conversation created successfully');
    }catch(error){
            console.log(error,'Error');
    }
}

export const userMessages = async(request,response) => {
    try{
            const userId=request.params.body;
            const conversation = await Conversation.find({members:{$in : [userId]}});
            const conversationUserdata = Promise.all( conversation.map( async (chat) => {
                const receiverId = conversation.members.find((member)=> member!=userId);
                const usermsg= await User.findById(receiverId);
                return{  user: {email:usermsg.email , name: usermsg.name} , conversationID: conversation._id}
            })) 
            response.status(200).json(await conversationUserdata);
    }catch(error){
            console.log(error,'Error');
    }
}