const mongoose = require('mongoose');

const ArticleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: false
    },
    tags: [{
        type: String,
        required: false
    }]
});

const Article = mongoose.model('Article', ArticleSchema);

module.exports = Article;