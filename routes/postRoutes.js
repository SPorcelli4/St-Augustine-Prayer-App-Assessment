const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');
const { requireAuth, checkUser } = require('../middleware/authMiddleware');

router.get('/post', requireAuth, postController.post_get);
router.post('/post', postController.post_post);
router.get('/all-posts', postController.all_posts_get);

module.exports = router;