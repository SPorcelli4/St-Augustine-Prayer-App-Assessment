const express = require('express');
const router = express.Router();
const routeController = require('../controllers/routeController');


// GET all articles
router.get('/', routeController.all_articles_get)

// POST a new article
router.post('/', routeController.article_post)

// Route to get a random article
router.get('/random-article', routeController.random_article_get)

// GET a random article by tag
router.get('/random-article-by-tag', routeController.random_article_by_tag_get)


module.exports = router;
