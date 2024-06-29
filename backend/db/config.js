import mongoose from "mongoose";

const uri = 'mongodb://localhost:27017'

export const connectDB = async ()=>{
    try {
        const connectionInstance = await mongoose.connect(uri);
        console.log("Database connected successfully on the host " + connectionInstance.connection.host);
    } catch (error) {
        console.log("Failed while connecting to the database " + error)
        process.exit(1);
    }
    
}

