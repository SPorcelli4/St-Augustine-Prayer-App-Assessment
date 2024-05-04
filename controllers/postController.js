const Post = require("../models/Post");


module.exports.post_get = async (req, res) => {
    res.render('post');
}
// controller actions
// module.exports.post_get = async (req, res) => {
//     try {
//         const posts = await Post.find();
//         res.json(posts);
//     } catch (err) {
//         res.status(500).json({ msg: err.message });
//     }
// };
  

module.exports.post_post = async (req, res) => {
const {header} = req.body;

try {
    const userId = req.user._id;
    if (!userId) throw new Error('User not found');
    // create a new post
    const post = await Post.create({ header, userId });
    res.status(201).json({post});
}
catch(err) {
    res.status(500).json({ msg: err.message });
}};

module.exports.all_posts_get = async (req, res) => {
    try {
        const userId  = req.user._id;
        const posts = await Post.find({userId});
        res.json(posts);
    } catch (err) {
        res.status(500).json({ msg: err.message });
    }
};
