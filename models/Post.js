const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    header: {
        type: String,
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
});

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;