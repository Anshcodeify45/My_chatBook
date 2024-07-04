
import { request, response } from "express"
import user from "../Model/userSchema.js"

export const userSignup = async (request ,response) =>{
        try{

            const exist = await user.findOne({username:request.body,username})
            if(exist){
                return response.status(401).json({message:"username already exist"})
            }

            const User=request.body
            const newUser = new user(User);
            await newUser.save();

            response.status(200).json({message:User})
        }catch(error){
            response.status(500).json({message:error.message});
        }
}


export const userLogin = async(request,response)=>{
    try{
            
            const username=request.body.username;
            const password=request.body.password;

            let user = await user.findOne({username:username , password:password});

            if(Data){
                return response.status(200).json(`${username}login successfully`)
            }
            else{
                return response.status(401).json('invalid login')
            }

    }catch(error){
                response.status(500).json("Error",error.message);
    }
}