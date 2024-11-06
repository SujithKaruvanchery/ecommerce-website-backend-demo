const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    image: String,
    title: String,
    price: Number,
    discount: Number
});

const ProductModel = mongoose.model('Product', productSchema);

module.exports = ProductModel