import express from 'express'
import dotenv from 'dotenv';
import Connection from "./Database/db.js";
import Router from './Routes/routes.js';
import cors from "cors";
import bodyParser from 'body-parser';
import { Server } from 'socket.io';




const io = new Server(8080, {
    cors:{
        origin:'http://localhost:3000',
        methods:["GET","POST"],
    }
});


let users = [];
io.on('connection',(socket) => {
    console.log("user connected",socket.id)
    socket.on('adduser' , userId =>{
        const isUserexist = users.find(user=>user.userId === userId);
        if(!isUserexist){
        const user = {userId , socketId:socket.id};
        users.push(user);
        io.emit('getUsers',users);
        }
    })
   
})

const app = express()
dotenv.config();



app.use(cors());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use('/',Router);







const PORT = 8000;
const USER = process.env.DB_USER;
const PASSWORD= process.env.DB_PASSWORD;
Connection(USER,PASSWORD);


//socket connection




app.listen(PORT , ()=> console.log(`Server is runnig successfully pn PORT ${PORT}`));