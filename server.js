const express = require('express');
require('dotenv').config();
const connectDB = require('./database');
const app = express();

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

const articleRoutes = require('./routes/articles');
app.use('/api/articles', articleRoutes);

app.listen(process.env.PORT || 3000, () => {
    console.log('Server is running at port 3000');
});