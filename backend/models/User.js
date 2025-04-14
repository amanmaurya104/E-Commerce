const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email : {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    avatar: {
        type: String,
        default: ''
    },
    role : {
        type: String,
        enum: ['admin', 'user'],
        default: 'user',
    },
},{
    timestamps: true,
});

const User = mongoose.model('User', userSchema);
module.exports = User;