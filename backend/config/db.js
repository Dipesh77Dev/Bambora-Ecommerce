import mongoose from 'mongoose';
import colors from 'colors';

const connectDB = async() => {
    try{
        const connect = await mongoose.connect(process.env.MONGO_URL);
        console.log(`Connected to MongoDB Database... ${connect.connection.host}`.bgMagenta.white);
    }
    catch (err){
        console.log(`Error in MongoDB ${err}, MongoDB connection failed...`.bgRed.white)
    }
}

export default connectDB;