const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Public route — get all active products
router.get('/', productController.getAllProducts);

// Optional: create product (for testing)
router.post('/', productController.createProduct);

module.exports = router;
