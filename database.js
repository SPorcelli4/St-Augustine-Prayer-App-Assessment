// Import the mongoose library to interact with MongoDB
const mongoose = require('mongoose');


// Retrieve the MongoDB URI from environment variables, ensuring that sensitive information is not hardcoded
const uri = process.env.MONGODB_URI;

// If the MongoDB URI is not found in the environment variables, throw an error and stop execution
if (!uri) throw new Error("Missing MONGODB_URI in .env");

// Define an asynchronous function to connect to MongoDB
const connectDB = async () => {
    try {
        // Attempt to connect to MongoDB using the URI and options for the connection
        await mongoose.connect(uri);
        // Log to the console upon successful connection
        console.log('MongoDB connected...');
    } catch (err) {
        // Log any errors that occur during the connection attempt
        console.error('Failed to connect to MongoDB', err);
        // Exit the process with a failure code
        process.exit(1);
    }
};

// Export the connectDB function so it can be used in other parts of the application
module.exports = connectDB;
