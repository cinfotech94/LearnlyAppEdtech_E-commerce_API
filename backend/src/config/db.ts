import mongoose from 'mongoose';
const connectDB = async () => {
    try {
        const mongoURI = process.env.MONGO_URI as string;
        if (!mongoURI) {
            throw new Error("MONGO_URI not defined in environment variables");
        }
        console.log(`Connecting to MongoDB with URI: ${mongoURI}`); // Debugging line
        await mongoose.connect(mongoURI);
        console.log('MongoDB connected');
    } catch (err: unknown) {
        if (err instanceof Error) {
            console.error(err.message);
        } else {
            console.error('Unexpected error', err);
        }
        process.exit(1);
    }
};

export default connectDB;
