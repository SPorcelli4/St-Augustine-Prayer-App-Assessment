const express = require('express');
const router = express.Router();
const Article = require('../models/Article');

// POST a new article
router.post('/', async (req, res) => {
    const { title, body } = req.body;
    try {
        const newArticle = new Article({ title, body });
        await newArticle.save();
        res.status(201).json(newArticle);
    } catch (err) {
        res.status(400).json({ msg: err.message });
    }
});

// GET all articles
router.get('/', async (req, res) => {
    try {
        const articles = await Article.find();
        res.json(articles);
    } catch (err) {
        res.status(500).json({ msg: err.message });
    }
});

module.exports = router;
