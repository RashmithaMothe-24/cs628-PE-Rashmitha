import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables

const uri = process.env.MONGO_URI;

if (!uri) {
    console.error("❌ MongoDB connection string is missing in .env file!");
    process.exit(1);
}

const client = new MongoClient(uri);

const connectDB = async () => {
    try {
        await client.connect();
        console.log("✅ MongoDB Connected Successfully!");
    } catch (error) {
        console.error("❌ MongoDB Connection Failed:", error);
        process.exit(1);
    }
};

export default connectDB;
export const db = client.db("RecipeDB"); 
