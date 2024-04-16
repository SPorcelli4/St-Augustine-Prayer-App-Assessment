const mongoose = require('mongoose');
const { MONGODB_URI } = require('./.env');

// MongoDB URI from MongoDB Atlas
const uri = process.env.MONGODB_URI;
if (!uri) throw new Error("Missing MONGODB_URI in .env");
const connectDB = async () => {
    try {
        await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('MongoDB connected...');
    } catch (err) {
        console.error('Failed to connect to MongoDB', err);
        process.exit(1); // Exit process with failure
    }
};

module.exports = connectDB;