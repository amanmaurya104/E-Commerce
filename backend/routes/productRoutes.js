const express = require('express');
const router = express.Router();

const { 
    createProduct, 
    getProductById, 
    updateProduct, 
    deleteProduct 
} = require('../controllers/productController');

const { authenticate, isAdmin } = require('../middlewares/authMiddleware');

router.post('/createProduct', authenticate, isAdmin, createProduct);
router.get('/getProduct/:id', getProductById);
router.put('/updateProduct/:id', authenticate, isAdmin, updateProduct);
router.delete('/deleteProduct/:id', authenticate, isAdmin, deleteProduct);

module.exports = router;