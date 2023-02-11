import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const userName = process.env.DB_USERNAME
const password = process.env.DB_PASSWORD

const Connection = async () => {
    const URL = `mongodb://${userName}:${password}@ac-87hxcqq-shard-00-00.damkigj.mongodb.net:27017,ac-87hxcqq-shard-00-01.damkigj.mongodb.net:27017,ac-87hxcqq-shard-00-02.damkigj.mongodb.net:27017/?ssl=true&replicaSet=atlas-106wke-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, {useUnifiedTopology:true})
        console.log("Database Connected Successfully");
    } catch(error) {
        console.log("Error in connecting", error);
    }
}
export default Connection;