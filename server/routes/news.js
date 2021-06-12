const express = require('express');
const { getNews, getSearchedNews } = require('../controllers/news.controller');

const router = express.Router();

router.get('/', getNews);
router.post('/search', getSearchedNews);

module.exports = router;