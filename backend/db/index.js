// import { MongoClient} from "mongodb";
import { mongoose } from "mongoose";
import dotenv from "dotenv";
dotenv.config()
// export const  client=new MongoClient(process.env.MONGODB_URL)
export const connectToDB=async()=> {
    try{
        // await client.connect()
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("Database Connected")
    }
    catch(error){
        console.log(error)
    }
}