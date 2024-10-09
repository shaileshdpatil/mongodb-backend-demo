require('dotenv').config();
const mongoose = require("mongoose");
const URI = process.env.DB_URL;

const connectDB = async () => {
    try {
        await mongoose.connect(URI);
        console.log('connection successfully');
    } catch (error) {
        console.error(`database connection failed ${error}`);
        process.exit(0);
    }
}

module.exports = connectDB;