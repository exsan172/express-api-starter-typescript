import mongoose from "mongoose"
import config from ".."

const mongooseConnection = async () => {
    try {
        await mongoose.connect(config.env.MONGO_HOST)
        console.log("Mongodb connection success !");
        
    } catch (error) {
        console.log("Mongodb connection failed ! ", error);
    }
}

export default mongooseConnection