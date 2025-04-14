const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');
const authenticate = require('../middlewares/authMiddleware');
const { registerUser, loginUser, getUserProfile, logoutUser } = require('../controllers/authController');

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/profile', authenticate, getUserProfile);
router.post('/logout', authenticate, logoutUser);

module.exports = router;