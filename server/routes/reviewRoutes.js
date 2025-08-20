const express = require('express');
const { getG2Reviews } = require('../controllers/reviewController');

const router = express.Router();

router.get('/g2', getG2Reviews);

module.exports = router;
