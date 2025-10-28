const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/reviewController');

// Public route — get all reviews
router.get('/', reviewController.getAllReviews);

module.exports = router;
