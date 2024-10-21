import mongoose from "mongoose";
import dotenv from "dotenv"
const connectToMongoDB = async () => {
	try {
		await mongoose.connect("mongodb+srv://yugparle:xhmJByEn8lcLWMOl@cluster0.bngrf.mongodb.net/ChatApp?retryWrites=true&w=majority&appName=Cluster0");
		console.log("Connected to MongoDB");
	} catch (error) {
		console.log("Error connecting to MongoDB", error.message);
	}
};

export default connectToMongoDB;
