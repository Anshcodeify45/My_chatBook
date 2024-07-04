import express from 'express'
import dotenv from 'dotenv';
import Connection from "./Database/db.js";
import router from './Routes/routes.js';
import cors from "cors";
import bodyParser from 'body-parser';
const app = express()
dotenv.config();


app.use(cors());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use('/',router);



const PORT = 8000;
const USER = process.env.DB_USER;
const PASSWORD= process.env.DB_PASSWORD;
Connection(USER,PASSWORD);
app.listen(PORT , ()=> console.log(`Server is runnig successfully pn PORT ${PORT}`));