const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    type: {
        type: String,
        enum: ['T-shirt','Hoodie','Pants','Shoes'],
        default: 'T-shirt'
    },
    sizes : {
        type: String,
        enum: ['S','M','L','XL','XXL'],
        default: 'S'
    },
    theme: {
        type: String,
        enum: ['Marvel','DC','Anime','Cartoon'],
        required: true,
    },
    
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;