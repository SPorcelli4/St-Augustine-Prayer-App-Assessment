// Import the express framework for creating the HTTP server
const express = require('express');

// Load environment variables from the .env file
require('dotenv').config();

// Import the database connection function from the database.js file
const connectDB = require('./database');

// Create an instance of express, which is our server
const app = express();

// Connect to the MongoDB database
connectDB();

// Middleware to parse JSON bodies. This will make incoming JSON requests available under the req.body property
app.use(express.json());

// Middleware to parse URL-encoded bodies. Useful for parsing the data coming from HTML forms
app.use(express.urlencoded({ extended: true }));

// Serve static files (like HTML, CSS, JavaScript) from the 'public' directory
app.use(express.static('public'));

// Import routes for the "articles" resource from the articles routes module
const articleRoutes = require('./routes/articles');

// Mount the articles routes at the '/api/articles' path, all routes defined in articleRoutes will be prefixed with this path
app.use('/api/articles', articleRoutes);

// Start the server on the port specified in the environment variables or default to 3000
app.listen(process.env.PORT || 3000, () => {
    console.log('Server is running at port 3000');
});
