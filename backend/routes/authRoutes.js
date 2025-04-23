const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');
const { authenticate } = require('../middlewares/authMiddleware');
const { registerUser, loginUser, getUserProfile, logoutUser } = require('../controllers/authController');

router.post('/registerUser', registerUser);
router.post('/loginUser', loginUser);
router.get('/profile', authenticate, getUserProfile);
router.post('/logoutUser', authenticate, logoutUser);

module.exports = router;