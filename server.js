// Import the express framework for creating the HTTP server
const express = require('express');
const cookieParser = require('cookie-parser');
const { requireAuth, checkUser } = require('./middleware/authMiddleware');
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

app.use(cookieParser());
// Serve static files (like HTML, CSS, JavaScript) from the 'public' directory
app.use(express.static('public'));

// view engine setup, still learning this
app.set('view engine', 'ejs');
// Import routes for the "articles" resource from the articles routes module
const articleRoutes = require('./routes/articles');

// Mount the articles routes at the '/api/articles' path, all routes defined in articleRoutes will be prefixed with this path
app.use('/api/articles', articleRoutes);

app.use(checkUser); // This applies the middleware to all incoming requests

const authRoutes = require('./routes/authRoutes');
app.use(authRoutes);

app.get('/', (req, res) => { res.render('tagprayers') });
app.get('/addprayers', requireAuth, (req, res) => { res.render('addprayers') });
app.get('/testgpt', (req, res) => { res.render('testgpt')});


// Start the server on the port specified in the environment variables or default to 3000
app.listen(process.env.PORT || 5000, () => {
    console.log('Server is running at port 5000');
});

