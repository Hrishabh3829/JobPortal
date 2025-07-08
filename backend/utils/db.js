import mongoose from "mongoose";

const connectDB = async () => {
    try {
        // Add connection options suitable for production
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            serverSelectionTimeoutMS: 5000, // Timeout after 5s instead of 30s
            maxPoolSize: 10, // Maintain up to 10 socket connections
        });
        
        console.log(`MongoDB connected successfully: ${conn.connection.host}`);
    } catch (error) {
        console.error(`MongoDB connection error: ${error.message}`);
        // Exit with failure in production for proper container/service restart
        process.exit(1);
    }
};

export default connectDB;