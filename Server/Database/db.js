import mongoose from "mongoose";






export const Connection = async (USER,PASSWORD) => {

    const URL=`mongodb://${USER}:${PASSWORD}@ac-towq0ic-shard-00-00.2saw9y8.mongodb.net:27017,ac-towq0ic-shard-00-01.2saw9y8.mongodb.net:27017,ac-towq0ic-shard-00-02.2saw9y8.mongodb.net:27017/?ssl=true&replicaSet=atlas-yadan9-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0`;

    try{
       await mongoose.connect(URL)
       console.log("Database connected succesfully")
    }catch(error){
        console.log("Error while connecting",error.message);
    }
}

export default Connection;