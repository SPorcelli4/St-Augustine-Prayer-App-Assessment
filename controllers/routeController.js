const Article = require('../models/Article');
const jwt = require('jsonwebtoken');


module.exports.all_articles_get = async (req, res) => {
    try {
        const articles = await Article.find();
        res.json(articles);
    } catch (err) {
        res.status(500).json({ msg: err.message });
    }
};

module.exports.article_post = async (req, res) => {
    const { title, body, tags } = req.body;
    try {
        const newArticle = new Article({ title, body, tags });
        await newArticle.save();
        res.status(201).json({ msg: "Prayer Uploaded" });
    } catch (err) {
        res.status(400).json({ msg: err.message });
    }
};


module.exports.random_article_get = async (req, res) => {
    try {
        const count = await Article.countDocuments();
        const rand = Math.floor(Math.random() * count);
        const randomArticle = await Article.findOne().skip(rand);
        if (!randomArticle) {
            return res.status(404).json({ msg: "No articles found" });
        }
        res.json(randomArticle);
    } catch (err) {
        res.status(500).json({ msg: err.message });
    }
};

module.exports.random_article_by_tag_get = async (req, res) => {
    const { tag } = req.query;
    try {
        let randomArticle;
        if (tag === "any") {
            const count = await Article.countDocuments({});
            const rand = Math.floor(Math.random() * count);
            randomArticle = await Article.findOne({}).skip(rand);
        } else {
            const count = await Article.countDocuments({ tags: tag });
            const rand = Math.floor(Math.random() * count);
            randomArticle = await Article.findOne({ tags: tag }).skip(rand);
        }

        if (!randomArticle) {
            return res.status(404).json({ msg: "No articles found" });
        }
        res.json(randomArticle);
    } catch (err) {
        res.status(500).json({ msg: err.message });
    }
};
