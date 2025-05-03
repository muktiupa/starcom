const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
//for dotenv connection

const connectDB = async () => { 
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB connected : ${mongoose.connection.host}`);
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }
}
module.exports = connectDB;
//for mongoose connection