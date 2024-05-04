const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');


router.get('/post', postController.post_get);
router.post('/post', postController.post_post);
router.get('/all-posts', postController.all_posts_get);

module.exports = router;