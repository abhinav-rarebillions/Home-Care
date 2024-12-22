import mongoose from "mongoose";

// MongoDB connection URL
const mongoUrl = "mongodb://127.0.0.1:27017/Homecare";

const connectDb = async () => {
    try {
     const connection =   await mongoose.connect(mongoUrl);
        console.log(`Connected to DB: ${connection.connection.name} at ${mongoUrl}`);
        
        return true;
    } catch (error) {
        console.error("Error connecting to database:", error);
        return false; 
    }
};

export default connectDb;
