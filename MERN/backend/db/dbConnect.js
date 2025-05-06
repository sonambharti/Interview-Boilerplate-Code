require("dotenv").config({ path: "../.env" });
const mongoose = require("mongoose");
const MONGO_URI = process.env.MONGO_URI;
const connectDB = async () => {
    try {
        if(!MONGO_URI){
            throw new Error("MONGO URI is not defined in .env");
        }
        const conn = await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`MongoDB connected: ${conn.connection.host}`);
    }
    catch (err){
        console.error(`Database Connection Error: ${err.message}`);
        process.exit(1) // exit process on failure
    }
}
module.exports = connectDB;